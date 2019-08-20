import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent implements OnInit {

  editInformationForm: FormGroup;
  msgs = [];

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.detailId);
      this.getInformationData(params.detailId);
      this.editInformationForm = this.formBuilder.group({
        informationId: [params.detailId],
        name	: ['', Validators.compose([Validators.required])],
        gender: ['', Validators.compose([Validators.required])],
        dob: ['', Validators.compose([Validators.required])],
        country: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])],
      });
    });
  }

  editInformation(editInformationForm){
    this.msgs = [];
    console.log(editInformationForm);
    this.userService.editInformation(editInformationForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
      }
    });
  }

  getInformationData(detailId) {
    this.userService.informationGetData(detailId)
    .subscribe((result) => {
      if (result.status == 'success'){
        this.editInformationForm.patchValue({
          name: result.info.name,
          gender: result.info.gender,
          dob: result.info.dob,
          country: result.info.country,
          state: result.info.state,
          city: result.info.city,
        });
      }
    });

  }

}
