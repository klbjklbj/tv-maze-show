import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MytvshowService } from './mytvshow.service';

describe('MytvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[ HttpClientTestingModule]}));

  it('should be created', () => {
    const service: MytvshowService = TestBed.get(MytvshowService);
    expect(service).toBeTruthy();
  });
});
