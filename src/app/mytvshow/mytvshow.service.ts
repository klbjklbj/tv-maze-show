import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';


interface Ishowinfodata {
show: {
  name:string,
  genres: string[]
  },
country:{
  name: string
},
image: {
  medium: string
},
summary:{
htmlelement:string
}
}

@Injectable({
  providedIn: 'root'
})
export class MytvshowService {

  constructor(private httpClient: HttpClient) { }

  getmytvshow(show:string,country: string){
    this.httpClient.get<Ishowinfodata>(
      `${environment.baseUrl}http://api.tvmaze.com/search/shows?q=${city},${country}&appId=${environment.appId}`
    )
  }
}


