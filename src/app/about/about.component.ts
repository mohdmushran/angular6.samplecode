import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'string';
  description = 'string';
  image = '';
  date = '';
  aboutForm: FormGroup;
  msgs = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.aboutForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])]
    });
  }

  register(aboutForm){
    this.msgs = [];
    console.log(aboutForm);
    console.log(aboutForm.date.getMonth())

    // var lastDate = aboutForm.date;
    // var mm = lastDate.getMonth() + 1;
    // var dd = lastDate.getDate();
    // var yyyy = lastDate.getFullYear();
    // var formattedDate = mm + '/' + dd + '/' + yyyy;
    // console.log(formattedDate)

    aboutForm.newdate = aboutForm.date.toLocaleDateString();
    
    this.userService.saveAbout(aboutForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.aboutForm.reset();
      }
    });
  }
}