import { Component, inject, signal } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import {DUMMY_USERS} from '../data/dummy-users'
import { UserData } from './components/user/user.model';
import { UserTasks } from './components/user-tasks/user-tasks';
import { TaskService } from './components/user-tasks/task-service';

@Component({
  selector: 'app-root',
  imports: [Header, User, UserTasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  

export class App {
  selectedUser ?: UserData;
  users = DUMMY_USERS;
  protected readonly title = signal('angular-course');
  private taskService = inject(TaskService);    
  


  /* Explain ! => In Typescript  */

  /* Explain ? => In Typescript it main maybe the value or varaible have undefined value and it normal */

  // Alternative of this ? == 
  /* 
  name ?: string;  === name : string | undefined;
  */

  /* Output List Using @For Directive */
  /* 
  @for(condition; track prefere id) // Becasue id is Unique
  {
  repeated Code 
  renedring componenet or html
  }
  */

  // Conditional Rendring @if

  /* 
  @if(condition) {
   redenr code
  } @else{
    
    if condtion false
    render code
    }
  
  */

    /* Legacy Angular using *ngFor and *ngIf */

    //Must Import
    // NgFor for use *ngFor 
    /* 
    <li *ngFor="let user of users">
      <app-user [user]="user" (selectUser)="onSelectUser($event)" />
    </li>
  </ul>
  <div class="w-full !p-[20px] text-center">
    <app-user-tasks *ngIf="selectedUser; else fallback" [name]="selectedUser.name"></app-user-tasks>

    <ng-template #fallback>
      <p class="text-white text-2xl text-center">Select a User to see their tasks!</p>
    </ng-template>
     
    */

  onSelectUser(id:string ){
   const user = this.users.find(user => user.id === id);
   if(!user) return;
   this.selectedUser = user;
  }

  tasksCount(){
    return this.taskService.tasksCount();
  }

  userTasksCount(){

    if(this.selectedUser?.id ) return this.taskService.getUserTasksCount(this.selectedUser?.id);
    return 0;
  }

  getSelecteUserName(id:string){
    return this.users.find(user => user.id === id)?.name;
  }
}
