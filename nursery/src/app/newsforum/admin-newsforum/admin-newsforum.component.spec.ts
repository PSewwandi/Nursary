import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsforumComponent } from './admin-newsforum.component';

describe('AdminNewsforumComponent', () => {
  let component: AdminNewsforumComponent;
  let fixture: ComponentFixture<AdminNewsforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
