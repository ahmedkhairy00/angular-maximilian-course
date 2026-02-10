import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancelAddTask = new EventEmitter<void>();

  onCancelAddTask() {
    this.cancelAddTask.emit();
  }

  onSubmit() {
    // Submit logic
  }
}
