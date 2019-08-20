import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = 'string';
  dob = 'string';
  gender = 'string';
  msgs = [];
  dashboardForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.dashboardForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])]
    });
  }

  dashboard(dashboardForm) {
    this.msgs = [];
    console.log(dashboardForm);
    this.userService.dashboard(dashboardForm)
    .subscribe(result => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.dashboardForm.reset();
      }
    });

  }

}
