import { Component } from '@angular/core';
import { Header } from './Components/header/header';
import { Tickets } from './Components/dashboard/tickets/tickets';
import { Traffic } from './Components/dashboard/traffic/traffic';
import { ServerStatus } from './Components/dashboard/server-status/server-status';
import { DashboardItem } from "./Components/dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Tickets, Traffic, ServerStatus, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'offline';

  // Note to pass string to Property binding we can use it 
  /* 
   [title] = "'A signal Mode'"
   title = "A signal Mode"
  */

   // Note In Angular If We Create Custom Component Angular Ignore any Contnent Between it opening and closing tags  

   // Like This
   /* 
   
   <app-dashboard-item
      [imgData]="{ src: 'status.png', alt: 'A signal symbol' }"
      title="Server Status"
    >
      <app-server-status [status]="currentStatus"></app-server-status>
    </app-dashboard-item>
   
   *

    // and we can solve this by using content projection , that we used in html file
    // where we tell Angular  were inject or render content by using <ng-content></ng-content> tag or <ng-content />
    // Like This
    /* 
    
<div class="dashboard-item">
  <article>
    <header>
      <img [src]="imgData().src" [alt]="imgData().alt" />
      <h2>{{ title() }}</h2>
    </header>
  </article>
  <ng-content></ng-content>    => Here Angular will render the content that is between the opening and closing tags of the custom component
</div>
    
    */

 // <ng-content /> is a Placeholder for the Wrapped content is also called "Content Projection"

}