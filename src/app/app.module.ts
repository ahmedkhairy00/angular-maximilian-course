import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {App} from './app'
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { UserTasks } from './components/user-tasks/user-tasks';
import { NewTask } from './components/user-tasks/new-task/new-task';
import { SharedModule } from './components/Shared/shared.module';

@NgModule({
    declarations : [App,Header],
    bootstrap : [App],
    // imports array can contain standalone components
    imports : [BrowserModule,SharedModule],
})
export class AppModule{
}