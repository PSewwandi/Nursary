import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFrameComponent } from './dashboard-frame.component';

describe('DashboardFrameComponent', () => {
  let component: DashboardFrameComponent;
  let fixture: ComponentFixture<DashboardFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
