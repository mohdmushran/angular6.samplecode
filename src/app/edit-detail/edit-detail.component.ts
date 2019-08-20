import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  editForm: FormGroup;
  msgs = [];

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.detailId);
      this.getData(params.detailId);
      this.editForm = this.formBuilder.group({
        userId: [params.detailId],
        name: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        mobile: ['', Validators.compose([Validators.required])],
        address: ['', Validators.compose([Validators.required])],
      });
    });
    
  }

  getInfo(editForm){
    // console.log(editForm);
    this.msgs = [];
    console.log(editForm);
    this.userService.editInfo(editForm)
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
    this.userService.Data(detailId)
    .subscribe((result) => {
      if (result.status == 'success'){
        console.log(this.editForm)
        // this.editForm.controls.name.patchValue(result.info.name);
        // this.editForm.controls.email.patchValue(result.info.email);
        // this.editForm.controls.mobile.patchValue(result.info.mobile);
        // this.editForm.controls.address.patchValue(result.info.address);
        this.editForm.patchValue({
          name: result.info.name,
          email: result.info.email,
          mobile: result.info.mobile,
          address: result.info.address
        });
      }
    });

  }

}
