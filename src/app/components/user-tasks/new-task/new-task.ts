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
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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

/* Directives In Angular => We Can Enhance Elements by adding so-called Directives to them */

/* <input ngModel> 
   NgModel Directive => An "element enhancement that helps with extracting (or chanhing) user Input Value"
   Directive => Unlike Componenets, dont have a template

   NgModel => Need Make Import For FormsModule from angular/form to working
   FormsModule => Normal Make PreventDefault() to make form send request to server and also redirect
*/

/* Components =====> Directives
  Componenets are directives! Directives With Template
*/

/* Two Way Binding Directive ngModel Directive
   ngModel => async data between logic (ts) and UI (html)
*/

  /* Using NgModel Directive */
  /* Note Input In Html => always Be String */

  // Normal Way
/*   enteredTitle = '';
  enterdSummary = '';
  enteredDate = new Date().toISOString().split('T')[0]; */


  // Signal Two Way Binding
 /* And Also Wotking With NgModel
  and This Signal Two Way Binding like Normal 
  [(ngMode)] ="title"    // Correct
  [(ngMode)] ="title()"  // Error
  
 */
 /*  title = signal('');
  summary = signal('');
  date = signal(''); */

  /* We Use (ngSubmit) = "onSubmit()" => to make event Emmit normally */


  /* We Can Use Shared Component is Rapper that contain other components content 
    and its content maybe not been appear ro componenet that inside it and it html of Shared Component appear

    and we Can use <ng-content> as Content Projection
  */

 /* Pipes => Is Used to Transfer value ir any thing it like function that take value and return it in another shape 
   like date => pipes used to appear data in diffrent shape
   date => import DatePipe from @angular/comman
   and add it in imports[DatePipe]
 */

   /*Using Service To Manage Data */

   /* 
   
   1 - to create serivce in Angular => ng generate service <service-name> || ng g service <service-name>
   2 - it used yo conatin all logic like create , update , delete , get data
   3 -  like create userTask.service contain arrray of tasks and delete Task and add task and update task
   4 - in Comman it used to call Api with Observable and Fetch data from backend

   import { Injectable } from '@angular/core';
import { newTaskData } from './task.model';
import { NewTask } from './new-task/new-task';


export class TaskService {

  // Private Data => Not Accessible From Outside
 private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop app.',
        dueDate: '2024-05-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary: 'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      },
    ];

   // get User Tasks
   
   getUserTasks(id : string){
    return this.tasks.filter(task => task.userId === id);
   }

   // Remove Task
   removeTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
   }


   // Add Task

   addTask(taskData : newTaskData , userId : string){
    this.tasks.unshift({
      id : crypto.randomUUID(),
      userId : userId,
      title : taskData.title,
      summary : taskData.summary,
      dueDate : taskData.date,
    });

   }

   // Update Task

   updateTask(taskId : string , taskData : newTaskData){
    
    const selectedTask = this.tasks.find(task => task.id == taskId);
    if(selectedTask){
      selectedTask.title = taskData.title;
      selectedTask.summary = taskData.summary;
      selectedTask.dueDate = taskData.date;
    }
   }


}

   */

/* Dependecies Injection */

/* 
 it is Design Pattartn used to inject service into component
 by two ways 
 1  - inject Service in Constructor of the componenet

 import { TaskService } from '../task-service';
  constructor(private taskService : TaskService){
   
   userTasks = this.taskService.getUserTasks(this.user?.id);

   addTask(taskData : newTaskData , userId : string){
    this.taskService.addTask(taskData , userId);
   }

   removeTask(id : string){
    this.taskService.removeTask(id);
   }

   updateTask(taskId : string , taskData : newTaskData){
    this.taskService.updateTask(taskId , taskData);
   }
    
  }

  2 - Secong Way to use inject function

  import { inject } from '@angular/core';
  import { TaskService } from '../task-service';
  const taskService = inject(TaskService);


   Note => This two ways is better to use same Service in multiple components

   But if We Create new Instance form service in diffrents Component 

   Exe : Component A => Create new Instance form service taskService = new TaskService()
         Component B => Create new Instance form service taskService = new TaskService()
           
         Here A.taskService != B.taskService

   this every Component => Will have Instance of service in the time that it used it 
   and that will make diffrent data in each component
*/

/* Use LocalStorage To Save Data

  constructor() {
       
      const tasks = localStorage.getItem('tasks');
      if(tasks){
        this.tasks = JSON.parse(tasks);
      }
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

   and use saveTasks() in every method that change data
   like removeTask() , addTask() , updateTask()
*/

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
