import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/shared/forum';
import { ForumService } from 'src/app/shared/forum.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-dashboard-frame',
  templateUrl: './dashboard-frame.component.html',
  styleUrls: ['./dashboard-frame.component.css']
})
export class DashboardFrameComponent implements OnInit {

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
