import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTvmazeshowComponent } from './my-tvmazeshow.component';

describe('MyTvmazeshowComponent', () => {
  let component: MyTvmazeshowComponent;
  let fixture: ComponentFixture<MyTvmazeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTvmazeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTvmazeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
