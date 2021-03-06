import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email_address = 'string';
  password = 'string';
  msgs = [];
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_address: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  login(loginForm) {
    this.msgs = [];
    console.log(loginForm);
    this.userService.loginPage(loginForm)
    .subscribe(result => {
      if (result.status == "success") {
        localStorage.setItem('jwt_token', result.token);
        this.router.navigateByUrl('/registration');
      } else {
        alert("Wrong Credentials!");
      }
    });

  }

}
