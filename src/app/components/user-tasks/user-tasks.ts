import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  @Input() name!: string;

}
