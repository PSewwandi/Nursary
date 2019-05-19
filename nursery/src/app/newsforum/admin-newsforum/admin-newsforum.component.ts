import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ForumService } from 'src/app/shared/forum.service';
import { Forum } from 'src/app/shared/forum';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/shared/event';

@Component({
  selector: 'app-admin-newsforum',
  templateUrl: './admin-newsforum.component.html',
  styleUrls: ['./admin-newsforum.component.css']
})
export class AdminNewsforumComponent implements OnInit {

  forumForm: FormGroup;
  forumData: Forum;
  view: Forum[];

  eventForm: FormGroup;
  eventData: Event;
  viewEvent: Event[];
  date: FormControl;

  id: String;
  forumNum: number;
  eventNum: number;
  sub;
  constructor(private fmService: ForumService,
    private etService: EventService,
    private fmBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.initForm();
    this.viewMsg();

    this.initEventForm();
    this.viewEve();
    this.date = new FormControl((new Date()), Validators.required);
  }

  // Forum form functions

  // initialise form
  private initForm() {
    this.forumForm = this.fmBuilder.group({
      id: new FormControl({ value: '', disabled: true }),
      title: new FormControl('',[Validators.required]),
      msg: new FormControl('',[Validators.required]),
      date: new FormControl(new Date().toUTCString())
    });
  }
  // load data
  private loadForumDeatail(id) {
    this.fmService.forumGetId(id)
    .subscribe(item => {
      this.forumData = item.data();

      this.forumForm.get('id').setValue(id);
      this.forumForm.get('title').setValue(this.forumData.title);
      this.forumForm.get('msg').setValue(this.forumData.msg);
    });
  }
  // add to db
  onSubmit() {
    if(this.forumForm.valid && confirm('Are you sure?')) {
      console.log(this.fmService.forumAdd(this.forumForm.value));
      console.log('added to db post');
      this.forumForm.reset();
      this.router.navigate(['admin-forum']);
    } else {
      alert('please check');
    }
  }
  // view data
  viewMsg() {
    const data = this.fmService.forumGet();
    data.subscribe(d => {
      this.view = [];
      d.forEach(e => { 
        this.view.push(e);
        this.view.sort(function (a, b) {
          return ((new Date(b.date).getTime() - new Date(a.date).getTime()));
        });
      });
      this.forumNum = this.view.length;
    });
    
  }
  // delete forum
  forumDelete(row1) {
    if (confirm('Are you sure?')) {
      this.fmService.forumDelete(row1.id);
    }
  }


  // Event form functions

  // initialise form
  private initEventForm() {
    this.eventForm = this.fmBuilder.group({
      id: [''],
      time: new FormControl('',[Validators.required]),
      event: new FormControl('',[Validators.required]),
      venue: new FormControl('',[Validators.required]),
      pDate: new FormControl(new Date().toUTCString())
    });
  }
  // load data
  private loadEventDeatails(id) {
    this.etService.eventGetId(id)
    .subscribe(item => {
      this.eventData = item.data();


      this.eventForm.get('id').setValue(this.eventData.id);
      this.eventForm.get('time').setValue(this.eventData.time);
      this.eventForm.get('event').setValue(this.eventData.event);
      this.eventForm.get('venue').setValue(this.eventData.venue);
    });
  }
  // add to db
  eventSubmit() {
    if(this.eventForm.valid && (new Date(this.date.value).getTime()) >= (new Date().getTime()) && confirm('Are you sure?')) {
      const data = Object(this.eventForm.value);
      data['date'] = this.date.value.toUTCString();
      if (this.id == this.eventForm.get('id').value) {
        console.log(this.etService.eventUpdate(this.id, data));
        console.log('Updated');
      } else {
        this.etService.eventAdd(data).then(value => {
          data['id'] = value.id;
          this.eventForm.get('id').setValue(value.id);
          this.etService.eventUpdate(value.id, data);
          console.log('added to db event');
        });
      }
      this.eventForm.reset();
      this.router.navigate(['admin-forum']);
    } else {
      alert('please check');
    }
  }
  // view data
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
  // event delete
  eventDelete(row) {
    if (confirm('Are you sure?')) {
      this.etService.eventDelete(row.id);
    }
  }
  // event update
  eventUpdate(row) {
    this.router.navigate(['admin-forum'], { queryParams: { id: row.id } });
    this.id = row['id'];
    console.log(this.id);
    this.loadEventDeatails(this.id);
  }

  // both functions

  // give input errors
  getErrorMessage(fControl: FormControl) {
    return fControl.hasError('required') ? 'This field is required' : '';
  }
  // clear the forms
  clear() {
    this.forumForm.reset();
  }
}
