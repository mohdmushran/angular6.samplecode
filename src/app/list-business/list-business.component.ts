import { Component, OnInit } from '@angular/core';
import { UserService } from '../webservice/user.service';
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent implements OnInit {
  listings: any[];
  totalRecords: number = 0;
  rows: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getlisting(1);
  }

  getlisting(page) {
    this.userService.listBusiness(page).subscribe(result => {
      this.listings = result.data.data;
      this.totalRecords = result.data.total;
      this.rows = result.data.per_page;
    });
  }

  paginate($event) {
    let newpage = $event.page + 1;
    this.getlisting(newpage);
    console.log($event.page)
  }

}
