import { Component, EventEmitter, Input, Output } from '@angular/core';

/* Use type Keyword to Define Its Type */
import {  UserData } from './user.model';



@Component({  
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
 @Input({ required : true}) user !: UserData;
 @Input({required : true}) selected !: boolean;

  // @Output allows the child to send a message (event) back to the parent
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    // When the button is clicked, we "emit" the user ID to the parent
    this.selectUser.emit(this.user.id);
  }
}
