import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MytvshowService } from "../mytvshow/mytvshow.service";

@Component({
  selector: "app-show-search",
  templateUrl: "./show-search.component.html",
  styleUrls: ["./show-search.component.css"]
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl();
  constructor(private mytvshowService: MytvshowService) {}

  ngOnInit() {
    //listen for textbox changes
    this.search.valueChanges.subscribe((searchValue: string) => {
      const userInput=searchValue.trim();
      this.mytvshowService.getmytvshow(userInput).subscribe(data=>console.log(data));
    });
  }
}
