import { Component, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';

@Component({
  selector: 'app-my-tvmazeshow',
  templateUrl: './my-tvmazeshow.component.html',
  styleUrls: ['./my-tvmazeshow.component.css']
})
export class MyTvmazeshowComponent implements OnInit {

  show: IShowInfo
  constructor() { 
    this.show={
      name: 'SpongeBob Squarepants',
      genre: 'kids',
      country: 'USA',
      summary: 'He lives in a pineapple under the sea.',
      image: '',
    }
  }

  ngOnInit() {
  }

}
