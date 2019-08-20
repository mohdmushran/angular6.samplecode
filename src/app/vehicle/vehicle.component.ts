import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle_name = 'string';
  description = 'string';
  year = 'string';
  make = 'string';
  model = 'string';
  country = 'string';
  state = 'string';
  city = 'string';
  vehicleForm: FormGroup;
  msgs = [];
  countries = [];
  states = [];
  cities = [];

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.vehicleForm = this.formBuilder.group({
      vehicle_name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      year: ['', Validators.compose([Validators.required])],
      make: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
    });
    this.getCountriesInfo();
  }

  getCountriesInfo() {
    this.userService.getCountries()
    .subscribe((result) => {
      this.countries = result.countries;
    });
  }

  saveVehicle(vehicleForm){
    this.msgs = [];
    console.log(vehicleForm);    
    this.userService.saveVehicle(vehicleForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
        this.vehicleForm.reset();
      }
    });
  }

  loadStates(countryId) {
    this.states = [];
    this.userService.getStates(countryId)
    .subscribe((result) => {
      this.states = result.states;
    });
  }

  loadCities(stateId) {
    this.cities = [];
    this.userService.getcities(stateId)
    .subscribe((result) => {
      this.cities = result.cities;
    });
  }

  // getDropDownData() {
  //   this.msgs = [];
  //   console.log();
  //   this.userService.getAllData()
  //   .subscribe((result) => { 

  //   });

  // }

}
