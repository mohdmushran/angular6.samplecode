import { Component, OnInit } from '@angular/core';
import { UserService } from '../webservice/user.service';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.css']
})
export class ListInformationComponent implements OnInit {

  listings: any[];
  totalRecords: number = 0;
  rows: number = 0;
  keyword = '';
  msgs = [];

  constructor(private userService: UserService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getlisting(1);
  }

  getlisting(page) {
    this.userService.listInformation(page)
    .subscribe(result => {
      this.listings = result.data.data;
      this.totalRecords = result.data.total;
      this.rows = result.data.per_page;
    })
  }

  paginate($event) {
    let newpage = $event.page;
    this.getlisting(newpage);
  }

  deleteInformation(detailId,index){
    this.userService.deleteInformation(detailId)
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

  downloadInformationPdf(info,index) {
    // console.log(info.id);
    this.userService.downloadInformationPdf(info.id)
    .subscribe(result => {
      
    });
  }
}
