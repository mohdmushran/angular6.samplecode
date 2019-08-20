import { Component, OnInit } from '@angular/core';
import { UserService } from '../webservice/user.service';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/api';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  listings: any[];
  totalRecords: number = 0;
  rows: number = 0;
  keyword = '';
  msgs = [];
  pdfWebhook: string = environment.pdf_webhook;

  constructor(private userService: UserService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getlisting(1);
  }

  getlisting(page) {
    this.userService.listResume(page,this.keyword)
    .subscribe(result => {
      this.listings = result.data.data;
      this.totalRecords = result.data.total;
      this.rows = result.data.per_page;
    })
  }

  paginate($event) {
    let newpage = $event.page + 1;
    this.getlisting(newpage);
  }

  search() {
    this.getlisting(1);
  }

  resetsearch() {
    this.keyword = '';
    this.getlisting(1);
  }

  delete(info, index) {
    console.log(index);
    this.confirmationService.confirm({
      message: 'Are you sure to delete it?',
      accept: () => {
        this.deleteInfo(info.id, index);
      }
    });
  }

  deleteInfo(userId,index){
    this.userService.deleteInfo(userId)
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

  downloadInfoPdf(info,index) {
    // console.log(info.id);
    this.userService.downloadPdf(info.id)
    .subscribe(result => {
      
    });
  }

}
