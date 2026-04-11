import { Component,input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  host:{
  class:'dashboard-item'
  }
})
export class DashboardItem {

  imgData = input.required<{src:string , alt:string}>();
  title = input.required<string>();
}
