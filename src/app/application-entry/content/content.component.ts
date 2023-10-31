import {Component, OnInit} from '@angular/core';


export interface ChordData {
  chord: string;
  position: number;
}

export interface SongLine {
  chords: ChordData[];
  lyrics: string[];
}

export interface combined {
  chord?: string;
  lyrics: string;
}

export interface lines {
  line: combined[];
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  likedButtonHover = false;


  // songLines: SongLine[] = [
  //   {
  //     chords: [
  //       {chord: 'C', position: 0},
  //       {chord: 'G', position: 4},
  //     ],
  //     lyrics: ['I', 'found', 'a', 'love', 'for', 'me']
  //   },
  //   {
  //     chords: [
  //       {chord: 'C', position: 0},
  //       {chord: 'G', position: 4},
  //     ],
  //     lyrics: ['I', 'found', 'a', 'love', 'for', 'me']
  //   },
  // ];


  songLines: SongLine[] = [
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 16},
      ],
      lyrics: [
        "The", "club", "isn't", "the", "best", "place", "to", "find", "a", "lover", "so", "the", "bar", "is", "where", "I", "go"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 15},
      ],
      lyrics: [
        "Me", "and", "my", "friends", "at", "the", "table", "doing", "shots,", "drinking", "fast", "and", "then", "we", "talk", "slow"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 16},
      ],
      lyrics: [
        "The", "club", "isn't", "the", "best", "place", "to", "find", "a", "lover", "so", "the", "bar", "is", "where", "I", "go"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 15},
      ],
      lyrics: [
        "Me", "and", "my", "friends", "at", "the", "table", "doing", "shots,", "drinking", "fast", "and", "then", "we", "talk", "slow"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 3},
        {chord: 'G', position: 8},
      ],
      lyrics: [
        "I'm", "in", "love", "with", "the", "shape", "of", "you"
      ],
    },{
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 16},
      ],
      lyrics: [
        "The", "club", "isn't", "the", "best", "place", "to", "find", "a", "lover", "so", "the", "bar", "is", "where", "I", "go"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 15},
      ],
      lyrics: [
        "Me", "and", "my", "friends", "at", "the", "table", "doing", "shots,", "drinking", "fast", "and", "then", "we", "talk", "slow"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 16},
      ],
      lyrics: [
        "The", "club", "isn't", "the", "best", "place", "to", "find", "a", "lover", "so", "the", "bar", "is", "where", "I", "go"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 5},
        {chord: 'G', position: 12},
        {chord: 'A', position: 15},
      ],
      lyrics: [
        "Me", "and", "my", "friends", "at", "the", "table", "doing", "shots,", "drinking", "fast", "and", "then", "we", "talk", "slow"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'G', position: 0},
        {chord: 'A', position: 4},
      ],
      lyrics: [
        "Come", "on,", "be", "my", "baby,", "come", "on"
      ],
    },
    {
      chords: [
        {chord: 'Bm', position: 0},
        {chord: 'Em', position: 3},
        {chord: 'G', position: 8},
      ],
      lyrics: [
        "I'm", "in", "love", "with", "the", "shape", "of", "you"
      ],
    },
  ];

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
    this.refineSong();
  }
}
