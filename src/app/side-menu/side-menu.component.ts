import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
    {
        label: 'Add User',
        routerLink: '/'
    },
    {
      label: 'User Listing',
      routerLink: '/list-detail'
    },

    {
      label: 'Add Vehicle',
      routerLink: '/vehicle'
    },
    {
      label: 'Vehicle Listing',
      routerLink: '/list-vehicle'
    },

    {
      label: 'Add Job',
      routerLink: '/job'
    },
    {
      label: 'Job Listing',
      routerLink: '/list-job'
    },
  ];
  }

}
