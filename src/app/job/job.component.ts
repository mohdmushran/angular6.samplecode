import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job_title = 'string';
  job_description = 'string';
  salary_minimum = 'string';
  salary_maximum = 'string';
  job_location = 'string';
  job_category = 'string';
  joining_date = 'string';
  jobForm: FormGroup;
  msgs = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      job_title: ['', Validators.compose([Validators.required])],
      job_description: ['', Validators.compose([Validators.required])],
      salary_minimum: ['', Validators.compose([Validators.required])],
      salary_maximum: ['', Validators.compose([Validators.required])],
      job_location: ['', Validators.compose([Validators.required])],
      job_category: ['', Validators.compose([Validators.required])],
      joining_date: ['', Validators.compose([Validators.required])],
    });
  }

  register(jobForm){
    this.msgs = [];
    console.log(jobForm);
    jobForm.newdate = jobForm.joining_date.toLocaleDateString();
    this.userService.saveJob(jobForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.jobForm.reset();
      }
    });
  }

}
