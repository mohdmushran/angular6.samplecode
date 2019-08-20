import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  name = 'string';
  gender = 'string';
  dob = '';
  country = 'string';
  state = 'string';
  city = 'string';
  informationForm: FormGroup;
  msgs = [];
  countries = [];
  states = [];
  cities = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.informationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])]
    });
    this.getCountriesInfo();
  }

  getCountriesInfo() {
    this.userService.getCountriesInfo()
    .subscribe((result) => {
      this.countries = result.countries;
    });
  }

  getStates(countryId) {
    this.states = [];
    this.userService.getStatesInfo(countryId)
    .subscribe((result) => {
      this.states = result.states;
    });
  }

  getCities(stateId) {
    this.cities = [];
    this.userService.getCitiesInfo(stateId)
    .subscribe((result) => {
      this.cities = result.cities;
    });
  }

  register(informationForm){
    this.msgs = [];
    console.log(informationForm);
    this.userService.saveInformation(informationForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.informationForm.reset();
      }
    });
  }

}
