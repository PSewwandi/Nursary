import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAdminComponent } from './forum-admin.component';

describe('ForumAdminComponent', () => {
  let component: ForumAdminComponent;
  let fixture: ComponentFixture<ForumAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
