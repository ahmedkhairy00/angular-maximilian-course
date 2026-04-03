import { Component,input } from '@angular/core';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class Traffic {
  trafficData = input.required<any[]>();
  max = input.required<number>();
}
