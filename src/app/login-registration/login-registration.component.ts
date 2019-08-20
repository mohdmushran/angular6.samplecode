import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  email_address = 'string';
  password = 'string';
  msgs = [];
  loginRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.loginRegistrationForm = this.formBuilder.group({
      email_address: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });

    // console.log(localStorage.getItem('USERINFO'));
  }

  loginRegistration(loginRegistrationForm) {
    this.msgs = [];
    console.log(loginRegistrationForm);
    this.userService.loginRegistration(loginRegistrationForm)
    .subscribe(result => {
      if (result.status == 'success') {
        localStorage.setItem('USERINFO', result.token);
        // this.router.navigateByUrl('/registration');
      } else {

      }
    });

  }

}
