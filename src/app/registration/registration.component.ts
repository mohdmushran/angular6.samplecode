import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  image = '';
  registrationForm: FormGroup;
  msgs = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      image: ['', Validators.compose([Validators.required])],
    });
  }

  registration(registrationForm){
    this.msgs = [];
    console.log(registrationForm);
    this.userService.saveRegistration(registrationForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.registrationForm.reset();
      }
    });
  }

}
