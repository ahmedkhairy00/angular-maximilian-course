import { Injectable } from '@angular/core';
import { newTaskData } from './task.model';
import { NewTask } from './new-task/new-task';

@Injectable({
  providedIn: 'root',
})
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

    /**
     *
     */
    constructor() {
       
      const tasks = localStorage.getItem('tasks');
      if(tasks){
        this.tasks = JSON.parse(tasks);
      }
    }
   // get User Tasks
   
   getUserTasks(id : string){
    return this.tasks.filter(task => task.userId === id);
   }

   // Remove Task
   removeTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
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
    this.saveTasks();

   }

   // Update Task

   updateTask(taskId : string , taskData : newTaskData){
    
    const selectedTask = this.tasks.find(task => task.id == taskId);
    if(selectedTask){
      selectedTask.title = taskData.title;
      selectedTask.summary = taskData.summary;
      selectedTask.dueDate = taskData.date;
    }
    this.saveTasks();
   }

   private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }


}
