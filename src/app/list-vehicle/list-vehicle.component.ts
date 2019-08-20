import { Component, OnInit } from '@angular/core';
import { UserService } from '../webservice/user.service';
import {CalendarModule} from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/api';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  listings: any[];
  totalRecords: number = 0;
  rows: number = 0;
  msgs = [];
  pdfWebhook: string = environment.vehicle_pdf_webhook;

  constructor(private userService: UserService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAllListing(1);
  }

  getAllListing(page) {
    this.userService.getListVehicle(page)
    .subscribe(result => {
      this.listings = result.data.data;
      this.totalRecords = result.data.total;
      this.rows = result.data.per_page;     
    })
  }

  paginate($event) {
    let newpage = $event.page + 1;
    this.getAllListing(newpage);
    console.log($event.page)
  }

  delete(vehicle, index) {
    console.log(index);
    this.confirmationService.confirm({
      message: 'Are you sure to delete it?',
      accept: () => {
        this.deleteVehicles(vehicle.id, index);
      }
    });
  }

  deleteVehicles(vehicleId,index){
    this.userService.deleteVehicle(vehicleId)
    .subscribe(result =>{
      if (result.status == 'success') {
        this.listings.splice(index, 1);
        this.msgs.push({severity:'success', detail:result.message});
      }
      if (result.status == 'error') {
        this.msgs.push({severity: 'error',detail:result.message});
      }
    });
  }

  downloadInfoPdf(vehicle,index) {
    // console.log(vehicle.id);
    this.userService.downloadVehiclePdf(vehicle.id)
    .subscribe(result => {
      
    });
  }
}
