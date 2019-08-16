import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



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
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${show},${country}&appId=${environment.appId}`
    )
  }
}


