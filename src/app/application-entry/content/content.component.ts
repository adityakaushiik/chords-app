import {Component} from '@angular/core';

export interface SongLine {
  chords: string[]; // Array of chords for the line
  lyrics: string[]; // Array of lyrics for the line
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {

  songLines: SongLine[] = [
    {
      chords: ['3','G','6','Em'],
      lyrics: ['I found a love for me'],
    },
    {
      chords: ['4','C','10','D','13','G','15','Em7'],
      lyrics: ['Darling, just dive right in, and follow my lead'],
    },
    {
      chords: ['2','G','25','Em'],
      lyrics: ['Well, I found a girl beautiful and sweet'],
    },
    {
      chords: ['4','F','50','Em'],
      lyrics: ['I never knew you were the someone waiting for me'],
    },{
      chords: ['3','G','6','Em'],
      lyrics: ['I found a love for me'],
    },
    {
      chords: ['4','C','10','D','13','G','15','Em7'],
      lyrics: ['Darling, just dive right in, and follow my lead'],
    },
    {
      chords: ['2','G','25','Em'],
      lyrics: ['Well, I found a girl beautiful and sweet'],
    },
    {
      chords: ['4','F','50','Em'],
      lyrics: ['I never knew you were the someone waiting for me'],
    },{
      chords: ['3','G','6','Em'],
      lyrics: ['I found a love for me'],
    },
    {
      chords: ['4','C','10','D','13','G','15','Em7'],
      lyrics: ['Darling, just dive right in, and follow my lead'],
    },
    {
      chords: ['2','G','25','Em'],
      lyrics: ['Well, I found a girl beautiful and sweet'],
    },
    {
      chords: ['4','F','50','Em'],
      lyrics: ['I never knew you were the someone waiting for me'],
    },{
      chords: ['3','G','6','Em'],
      lyrics: ['I found a love for me'],
    },
    {
      chords: ['4','C','10','D','13','G','15','Em7'],
      lyrics: ['Darling, just dive right in, and follow my lead'],
    },
    {
      chords: ['2','G','25','Em'],
      lyrics: ['Well, I found a girl beautiful and sweet'],
    },
    {
      chords: ['4','F','50','Em'],
      lyrics: ['I never knew you were the someone waiting for me'],
    },{
      chords: ['3','G','6','Em'],
      lyrics: ['I found a love for me'],
    },
    {
      chords: ['4','C','10','D','13','G','15','Em7'],
      lyrics: ['Darling, just dive right in, and follow my lead'],
    },
    {
      chords: ['2','G','25','Em'],
      lyrics: ['Well, I found a girl beautiful and sweet'],
    },
    {
      chords: ['4','F','50','Em'],
      lyrics: ['I never knew you were the someone waiting for me'],
    },
  ];

  isNumber(myString: string) {
    return !isNaN(parseInt(myString));
  }

  convertToNumber(myString: string) {
    return parseInt(myString);
  }
}
