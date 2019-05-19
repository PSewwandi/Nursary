import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsforumComponent } from './newsforum.component';

describe('NewsforumComponent', () => {
  let component: NewsforumComponent;
  let fixture: ComponentFixture<NewsforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
