import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedAdComponent } from './posted-ad.component';

describe('PostedAdComponent', () => {
  let component: PostedAdComponent;
  let fixture: ComponentFixture<PostedAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
