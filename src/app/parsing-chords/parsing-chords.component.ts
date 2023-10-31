import {Component, OnInit} from '@angular/core';
import {combined, lines} from "../application-entry/content/content.component";

interface ChordPosition {
  chord: string;
  position: number;
}

interface SongLine {
  chords: ChordPosition[];
  lyrics: string[];
}

@Component({
  selector: 'app-parsing-chords',
  templateUrl: './parsing-chords.component.html',
  styleUrls: ['./parsing-chords.component.scss']
})
export class ParsingChordsComponent implements OnInit {
  inputText = '';

  songLines: SongLine[] = [];

  parseInput() {
    let lines = this.inputText.split('\n');
    for (let i = 0; i < lines.length; i++) {
      let chordLine = lines[i].split('');
      let lyricLine = lines[i + 1].split('');



      let chord = '';
      let chordIndex = 0;
      let chordNumber = 0;

      let word = '';
      let wordNumber = 0;
      let wordIndex = 0;

      for (let j = 0; j < chordLine.length; j++) {
        if (lyricLine[j] !== ' ') {
          word += lyricLine[j];
          while (lyricLine[j] !== '') {
            wordIndex++;
            word += lyricLine[j];
          }

          while (!(chordIndex >= wordIndex)) {
            if (chordLine[chordIndex] !== '') {
              chord += chordLine[chordIndex];

              while (chordLine[chordIndex] !== ''){
                chord += chordLine[chordIndex];
                chordIndex++;
              }
            }
          }
        }
      }


      // this.songLines.push({chords: chords, lyrics: lyrics});
    }
    this.refineSong();
  }

  refinedSong: lines[] = [
    // {
    //   line: [
    //     {chord: 'C', lyrics: 'I'},
    //     {lyrics: 'found'},
    //     {lyrics: 'a'},
    //     {lyrics: 'love'},
    //     {chord: 'G', lyrics: 'for'},
    //     {lyrics: 'me'}
    //   ]
    // }
  ];

  refineSong() {
    for (let i = 0; i < this.songLines.length; i++) {
      let songLine = this.songLines[i];
      let line: combined[] = [];
      for (let j = 0; j < songLine.lyrics.length; j++) {
        let chord = songLine.chords.find(chord => chord.position === j);
        let lyrics = songLine.lyrics[j];
        if (chord) {
          line.push({chord: chord.chord, lyrics: lyrics});
        } else {
          line.push({lyrics: lyrics});
        }
      }
      this.refinedSong.push({line: line});
    }
  }

  ngOnInit(): void {
    this.parseInput();
    this.refineSong();
  }
}
