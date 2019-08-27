import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IShowInfo } from '../ishow-info';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface IMyTvShowService{
  getmytvshow(search: string) : Observable<IShowInfo>
}

// words here match words in TVMaze API
interface Ishowinfodata {
  
    name: string,
    genres: string[],
    network: {
      country: {
        name: string
      }
    },
    image: {
      medium: string
    },
    summary: string
  
}
@Injectable({
  providedIn: "root"
})
export class MytvshowService implements IMyTvShowService {
  //Angular's HttpClient gives back observable data
  constructor(private httpClient: HttpClient) { }
  //map() takes observable data and passes it to transform function
  getmytvshow(search: string) {
    return this.httpClient.get<Ishowinfodata>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${search}`
    ).pipe(
      map(data => this.transformToIShowInfo(data))
    );
  }
  //Data Transformation--input is Ishowinfodata, output is IShowInfo
  private transformToIShowInfo(data: Ishowinfodata): IShowInfo {
    return {
      name: data.name,
      genre: data.genres[0],
      country: data.network.country.name,
      summary: data.summary.replace(/<[^>]+>/g, ''),
      image: data.image.medium
    }
  }
}