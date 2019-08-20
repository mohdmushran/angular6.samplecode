import { Component, OnInit } from '@angular/core';
import { UserService } from '../webservice/user.service';
import {CalendarModule} from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmationService} from 'primeng/api';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  listings: any[];
  totalRecords: number = 0;
  rows: number = 0;
  msgs = [];
  pdfWebhook: string = environment.job_pdf_webhook;

  constructor(private userService: UserService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getlisting(1);
  }

  getlisting(page) {
    this.userService.listJob(page)
    .subscribe(result => {
      this.listings = result.data.data;
      this.totalRecords = result.data.total;
      this.rows = result.data.per_page;     
    })
  }

  paginate($event) {
    let newpage = $event.page + 1;
    this.getlisting(newpage);
    console.log($event.page)
  }

  delete(job, index) {
    console.log(index);
    this.confirmationService.confirm({
      message: 'Are you sure to delete it?',
      accept: () => {
        this.deleteJob(job.id, index);
      }
    });
  }

  deleteJob(detailId,index){
    this.userService.deleteJob(detailId)
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

  downloadJobPdf(job,index) {
    // console.log(job.id);
    this.userService.downloadJobPdf(job.id)
    .subscribe(result => {
      
    });
  }
}
