import { Component, Input } from '@angular/core';
import { newTaskData, Task } from './task.model';

import { TaskService } from './task-service';

@Component({
  selector: 'app-user-tasks',
  standalone: false,
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  // Refreshed component to resolve binding issues
  @Input({ required: true }) user?: { id: string; name: string; avatar: string };
  
  isAddingTask = false;
  isEditing = false;
  taskId !: string ;
  editingTaskData?: newTaskData;

  /**
   *
   */
  constructor( private taskService : TaskService) {
    
  }
   

  get userTasks() {
    return  this.taskService.getUserTasks(this.user!.id);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  addTask() {
    this.isAddingTask = true;
    this.isEditing = false;
    this.editingTaskData = undefined;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
    this.isEditing = false;
  }

  onAddTask(taskData : newTaskData){
    this.taskService.addTask(taskData , this.user!.id);
    this.isAddingTask = false;
  }

  onStartEditTask(task: Task) {
    this.isAddingTask = true;
    this.isEditing = true;
    this.taskId = task.id;
    this.editingTaskData = {
      title: task.title,
      summary: task.summary,
      date: task.dueDate
    };
  }

  onUpdateTask(event : {id : string , taskData : newTaskData}){
    this.taskService.updateTask(event.id , event.taskData);
    this.isAddingTask = false;
    this.isEditing = false;
  }
}
