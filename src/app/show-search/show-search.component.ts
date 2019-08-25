import { Component, Output, OnInit, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MytvshowService } from "../mytvshow/mytvshow.service";
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: "app-show-search",
  templateUrl: "./show-search.component.html",
  styleUrls: ["./show-search.component.css"]
})
export class ShowSearchComponent implements OnInit {
  //Output/emit an event named searchEvent
  //emits what's in textbox
  @Output() searchEvent=new EventEmitter<string>();

  search = new FormControl("", [Validators.minLength(3)]);
  constructor(private mytvshowService: MytvshowService) {}

  ngOnInit() {
    //listen for textbox changes
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {

        this.searchEvent.emit(searchValue);
        // const userInput = searchValue.trim();
        // this.mytvshowService
        //   .getmytvshow(userInput)
        //   .subscribe(data => console.log(data));
      }
    });
  }
}
