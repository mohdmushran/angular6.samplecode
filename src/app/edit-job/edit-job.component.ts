import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  editForm: FormGroup;
  msgs = [];

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.detailId);
      this.getData(params.detailId);
      this.editForm = this.formBuilder.group({
        jobId: [params.detailId],
        job_title: ['', Validators.compose([Validators.required])],
        job_description: ['', Validators.compose([Validators.required])],
        salary_minimum: ['', Validators.compose([Validators.required])],
        salary_maximum: ['', Validators.compose([Validators.required])],
        job_location: ['', Validators.compose([Validators.required])],
        job_category: ['', Validators.compose([Validators.required])],
        joining_date: ['', Validators.compose([Validators.required])],
      });
    });
  }
  getInfo(editForm){
    // console.log(editForm);
    this.msgs = [];
    console.log(editForm);
    editForm.newdate = editForm.joining_date.toLocaleDateString();
    this.userService.editJobInfo(editForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
      }
    });
  }

  getData(detailId) {
    console.log(detailId);
    this.userService.jobGetData(detailId)
    .subscribe((result) => {
      if (result.status == 'success'){
        console.log(this.editForm)
        this.editForm.patchValue({
          job_title: result.job.job_title,
          job_description: result.job.job_description,
          salary_minimum: result.job.salary_minimum,
          salary_maximum: result.job.salary_maximum,
          job_location: result.job.job_location,
          job_category: result.job.job_category,
          joining_date: result.job.newdate,
        });
      }
    });

  }

}
