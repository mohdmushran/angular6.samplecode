import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business_name = 'string';
  address = 'string';
  mobile_number = '';
  pin_code = '';
  gender = '';
  businessForm: FormGroup;
  msgs = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.businessForm = this.formBuilder.group({
      business_name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      mobile_number: ['', Validators.compose([Validators.required])],
      pin_code: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
    });
  }

  register(businessForm){
    this.msgs = [];
    // console.log(businessForm);
    this.userService.saveBusiness(businessForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.businessForm.reset();
      }
    });
  }

}
