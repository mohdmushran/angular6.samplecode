import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  editAboutForm: FormGroup;
  msgs = [];

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.detailId);
      this.getData(params.detailId);
      this.editAboutForm = this.formBuilder.group({
        userId: [params.detailId],
        title: ['', Validators.compose([Validators.required])],
        description: ['', Validators.compose([Validators.required])],
        image: ['', Validators.compose([Validators.required])],
        date: ['', Validators.compose([Validators.required])],
      });
    });
  }

  getInfo(editAboutForm){
    // console.log(editAboutForm);
    this.msgs = [];
    console.log(editAboutForm);
    this.userService.editAboutInfo(editAboutForm)
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
        console.log(this.editAboutForm)
        // this.editForm.controls.name.patchValue(result.info.name);
        // this.editForm.controls.email.patchValue(result.info.email);
        // this.editForm.controls.mobile.patchValue(result.info.mobile);
        // this.editForm.controls.address.patchValue(result.info.address);
        this.editAboutForm.patchValue({
          title: result.info.title,
          description: result.info.description,
          image: result.info.image,
          date: result.info.date
        });
      }
    });

  }

  

}
