import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingAdComponent } from './posting-ad.component';

describe('PostingAdComponent', () => {
  let component: PostingAdComponent;
  let fixture: ComponentFixture<PostingAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
