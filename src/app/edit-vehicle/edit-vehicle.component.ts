import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserService } from '../webservice/user.service';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {EditorModule} from 'primeng/editor';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  editVehicleForm: FormGroup;
  msgs = [];
  countries = [];
  states = [];
  cities = [];

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params.detailId);
      this.getVehicleData(params.detailId);
      this.editVehicleForm = this.formBuilder.group({
        vehicleId: [params.detailId],
        vehicle_name	: ['', Validators.compose([Validators.required])],
        description: ['', Validators.compose([Validators.required])],
        year: ['', Validators.compose([Validators.required])],
        make: ['', Validators.compose([Validators.required])],
        model: ['', Validators.compose([Validators.required])],
        country: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])],
      });
    });
    // this.getCountriesInfo();
  }

  // getCountriesInfo() {
  //   this.userService.getAllCountries()
  //   .subscribe((result) => {
  //     this.countries = result.countries;
  //   });
  // }

  loadStates(countryId) {
    this.states = this.cities = [];
    this.userService.getStates(countryId)
    .subscribe(result => {
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

  editVehicleInfo(editVehicleForm){
    // console.log(editVehicleForm);
    this.msgs = [];
    console.log(editVehicleForm);
    this.userService.editVehicleInfo(editVehicleForm)
    .subscribe((result) => {
      if (result.status == 'invalid' || result.status == 'error') {
        this.msgs.push({severity:'error', detail:result.message});
      }
      if (result.status == 'success') {
        this.msgs.push({severity:'success', detail:result.message});
      }
    });
  }

  getVehicleData(detailId) {
    this.userService.vehicleGetData(detailId)
    .subscribe((result) => {
      if (result.status == 'success'){
        this.countries = result.countries;
        this.states = result.states;
        this.cities = result.cities;
        this.editVehicleForm.patchValue({
          vehicle_name: result.vehicle.vehicle_name,
          description: result.vehicle.description,
          year: result.vehicle.year,
          make: result.vehicle.make,
          model: result.vehicle.model,
          country: result.vehicle.country,
          state: result.vehicle.state,
          city: result.vehicle.city,
        });
      }
    });

  }

}
