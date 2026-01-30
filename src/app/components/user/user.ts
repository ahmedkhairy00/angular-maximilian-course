import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // @Output allows the child to send a message (event) back to the parent
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    // When the button is clicked, we "emit" the user ID to the parent
    this.selectUser.emit(this.id);
  }
}
