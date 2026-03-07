import { NgModule } from "@angular/core";
import { NewTask } from "../user-tasks/new-task/new-task";
import { UserTasks } from "../user-tasks/user-tasks";
import { User } from "../user/user";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations:[NewTask,UserTasks,User],
    exports : [UserTasks,User],
    imports : [FormsModule,DatePipe]
})
export class SharedModule{

}