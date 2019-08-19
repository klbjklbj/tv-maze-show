import { Component, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';
import { MytvshowService } from '../mytvshow/mytvshow.service';

@Component({
  selector: 'app-my-tvmazeshow',
  templateUrl: './my-tvmazeshow.component.html',
  styleUrls: ['./my-tvmazeshow.component.css']
})
export class MyTvmazeshowComponent implements OnInit {

  show: IShowInfo
  constructor(private myTvShowService: MytvshowService) { 
 
  }

  //fires next after constructor()
  //initializes memory with data
  ngOnInit() {
    this.myTvShowService.getmytvshow('SpongeBob').subscribe(data=>this.show=data);
  }

}
