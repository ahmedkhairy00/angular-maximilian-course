import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import {DUMMY_USERS} from '../data/dummy-users'
import { UserTasks } from './components/user-tasks/user-tasks';
@Component({
  selector: 'app-root',
  imports: [Header,User,UserTasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedUser !: string;
  users = DUMMY_USERS;
  protected readonly title = signal('angular-course');

  onSelectUser(id:string ){
   const user = this.users.find(user => user.id === id);
   if(!user) return;
   this.selectedUser = user.name;
  }
}
