import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared/forum.service';
import { Forum } from '../shared/forum';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  view: Forum[];
  forumNum: number;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fmService: ForumService
  ) { }

  ngOnInit() {
    this.getForumNum();
  }

  getForumNum() {
    const data = this.fmService.forumGet();
    data.subscribe(d => {
      this.view = [];
      d.forEach(e => {
        this.view.push(e);
      });
      this.forumNum = this.view.length;
    });
  }
  logout() {
    this.auth.logoutAdmin();
    this.router.navigate(['']);
  }
}
