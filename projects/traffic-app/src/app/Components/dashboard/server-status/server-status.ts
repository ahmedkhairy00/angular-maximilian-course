import { Component ,input,signal} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  status=signal<'online' | 'offline' | 'unknown'>('offline');

  constructor(){
   
     setInterval(() => {
      const random = Math.random();

      if(random < 0.5){
        this.status.set('online');
      } else if(random < 0.9) {
        this.status.set('offline');
      } else {
        this.status.set('unknown');
      }
         console.log('CurrentStatus' , this.status());

    }, 5000);
  }
  
}

// Class Binding 
/* 
Is When We Use Conditional Class Binding To Bind Class To Element Based On Condition
In This Example We Bind Class "status" To Div Element When Status Is Offline
<div [class.status]="status() === 'offline'" >  // This Will Add Class "status" To Div Element When Status Is Offline

// Theres More than One Way Of Binding Css Classes
 We Can Make class dynamic to same element when we use [class]="{}" and pass object to it and in this object we can add as many classes as we want and make them dynamic based on condition
<div [class]="{
  status : true,
  'status-offline': status() === 'offline',
  'status-online': status() === 'online',
  'status-unknown': status() !== 'offline' && status() !== 'online'
}">
*/

// Inline Style Binding
/* 
[style.font-size] = "status() === 'offline' ? '20px' : '16px'" // This Will Set Font Size To 20px When Status Is Offline And 16px When Status Is Online

[style]="{
color : status() === 'offline' ? 'red' : 'green',
height : status() === 'offline' ? '100px' : '50px'
}" // This Will Set Multiple Styles To Element Based On Condition


*/