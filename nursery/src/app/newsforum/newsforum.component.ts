import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared/forum.service';
import { Forum } from 'src/app/shared/forum';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/shared/event';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-newsforum',
  templateUrl: './newsforum.component.html',
  styleUrls: ['./newsforum.component.css']
})
export class NewsforumComponent implements OnInit {

  dataSource: MatTableDataSource<Forum>;
  forumData: Forum;
  view: Forum[];

  eventData: Event;
  viewEvent: Event[];

  forumNum: number;
  eventNum: number;
  show1: boolean = true;
  show2: boolean;

  constructor(private auth: AuthenticationService,
    private fmService: ForumService,
    private etService: EventService,
    public router: Router) { }

  ngOnInit() {
    this.viewForum();
    this.viewEve();
  }
  viewForum() {
    const data = this.fmService.forumGet();
    data.subscribe(d => {
      this.view = [];
      d.forEach(e => {
        this.view.push(e);
        this.view.sort(function (a, b) {
          return ((new Date(b.date).getTime() - new Date(a.date).getTime()));
        });
      });
      this.dataSource = new MatTableDataSource(this.view);
      this.forumNum = this.view.length;
    });
  }
  // view event
  viewEve() {
    const data = this.etService.eventGet();
    data.subscribe(d => {
      this.viewEvent = [];
      d.forEach(e => {
        if ((new Date(e.date).getTime()) <= (new Date().getTime())) {
          this.etService.eventDelete(e.id);
        }
        this.viewEvent.push(e);
        this.viewEvent.sort(function (a, b) {
          return ((new Date(a.date).getTime() - new Date(b.date).getTime()));
        });
        this.eventNum = this.viewEvent.length;
      });
    });
  }
  logout() {
    this.auth.logoutParent();
    this.router.navigate(['']);
  }
  // search
  applyFilter(filterValue: string) {
    if (filterValue.length) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      
      this.view = [];
      this.dataSource.filteredData.forEach(e => {
        this.view.push(e);
      });
    } else {
      this.viewForum();
    }
  }
  // show
  search() {
    this.show1 = false;
    this.show2 = true;
  }

}
