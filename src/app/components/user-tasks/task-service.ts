import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { newTaskData, Task } from './task.model';
import { NewTask } from './new-task/new-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  // Private Data => Not Accessible From Outside

  tasksCount = computed(() => this.tasks().length);
 private tasks = signal<Task[]> ( [
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
    ]);

    /**
     *
     */
    private platformId = inject(PLATFORM_ID);

    constructor() {
      if (isPlatformBrowser(this.platformId)) {
        const tasks = localStorage.getItem('tasks');
        if(tasks && tasks !== 'undefined'){
          this.tasks.set(JSON.parse(tasks));
        }
        console.log(this.tasksCount());
      }
    }
   // get User Tasks
   
   getUserTasks(id : string){

    console.log('get user tasks', this.getUserTasksCount(id));
    return this.tasks().filter(task => task.userId === id);
   }

   // Remove Task
   removeTask(id : string): void{

    // remove task form sginals array use set ot update
    this.tasks.set(this.tasks().filter(task => task.id !== id));
    this.saveTasks();
    console.log(this.tasksCount());

   }


   // Add Task

   addTask(taskData : newTaskData , userId : string){
    this.tasks.update((tasks) => [{
      id : crypto.randomUUID(),
      userId : userId,
      title : taskData.title,
      summary : taskData.summary,
      // must date be in future if user want create user in past will be now
      dueDate : taskData.date < new Date().toISOString().split('T')[0] ? new Date().toISOString().split('T')[0] : taskData.date
    },
        ...tasks
    ]);
    
    this.saveTasks();
    console.log(this.tasksCount());

   }

   // Update Task

   updateTask(taskId : string , taskData : newTaskData){
    this.tasks.update(tasks => tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date < new Date().toISOString().split('T')[0] ? new Date().toISOString().split('T')[0] : taskData.date
        };
      }
      console.log(this.tasksCount());
      return task;
    }));
    this.saveTasks();
   }

   private saveTasks(){
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
   }

   getUserTasksCount(id : string){
    return this.tasks().filter(task => task.userId === id).length;
   }


}
