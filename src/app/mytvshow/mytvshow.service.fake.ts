import { IMyTvShowService} from './mytvshow.service';
import {IShowInfo} from '../ishow-info';
import {of} from 'rxjs';

export class MyTvShowServiceFake implements IMyTvShowService{
  private fakeShow: IShowInfo = {
    name: 'SpongeBob',
    genre: 'Kids',
    country: 'US',
    summary: 'He lives in a pineapple under the sea',
    image: ''
  }

  public getmytvshow(search: string) {
    return of(this.fakeShow);
  }
}