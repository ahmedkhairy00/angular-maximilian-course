import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  OnChanges,
  OnInit,
  Output,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { newTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask implements OnInit, OnChanges {
  // Signal-based inputs for better reactivity
  userId = input.required<string>();
  
  // Traditional inputs (keeping these for now as they work fine)
  @Input() taskId!: string;
  @Input() isEditing!: boolean;
  @Input() taskData?: newTaskData;

  @Output() cancelAddTask = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<newTaskData>();
  @Output() editTask = new EventEmitter<{ id: string; taskData: newTaskData }>();

  enteredTitle = '';
  enterdSummary = '';
  enteredDate = '';

  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.updateFormValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If any relevant input changes, re-evaluate values
    if (changes['taskData'] || changes['isEditing'] || changes['userId']) {
      this.updateFormValues();
    }
  }

  private updateFormValues(): void {
    if (this.isEditing && this.taskData) {
      this.enteredTitle = this.taskData.title;
      this.enterdSummary = this.taskData.summary;
      this.enteredDate = this.taskData.date;
    } else {
      // Load draft if creating a new task
      if (isPlatformBrowser(this.platformId)) {
        // 1. Try user-specific draft
        const id = this.userId();
        let savedData = localStorage.getItem('draft_task_' + id);
        
        // 2. Fallback to generic 'taskData' if user-specific draft is missing
        if (!savedData) {
          savedData = localStorage.getItem('taskData');
        }

        if (savedData) {
          try {
            const draft = JSON.parse(savedData);
            this.enteredTitle = draft.title || '';
            this.enterdSummary = draft.summary || '';
            this.enteredDate = draft.date || new Date().toISOString().split('T')[0];
            return;
          } catch (e) {
            console.error('Error parsing draft data', e);
          }
        }
      }
      this.resetForm();
    }
  }


  private resetForm(): void {
    this.enteredTitle = '';
    this.enterdSummary = '';
    this.enteredDate = new Date().toISOString().split('T')[0];
  }

  onCancelAddTask() {
    this.cancelAddTask.emit();

    // Save user data in localStorage when cancel add task
    if (isPlatformBrowser(this.platformId) && !this.isEditing) {
      const id = this.userId();
      localStorage.setItem('draft_task_' + id, JSON.stringify({
        title: this.enteredTitle,
        summary: this.enterdSummary,
        date: this.enteredDate,
      }));
    }
  }

  onSubmit() {
    if (this.isEditing && this.taskId) {
      this.editTask.emit({
        id: this.taskId,
        taskData: {
          title: this.enteredTitle,
          summary: this.enterdSummary,
          date: this.enteredDate,
        },
      });
    } else {
      // Clear draft on successful submission
      if (isPlatformBrowser(this.platformId)) {
        const id = this.userId();
        localStorage.removeItem('draft_task_' + id);
        localStorage.removeItem('taskData'); // Clear legacy key too
      }
      
      this.addNewTask.emit({
        title: this.enteredTitle,
        summary: this.enterdSummary,
        date: this.enteredDate,
      });
    }
  }
}
