import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
 import { ShareModule } from 'src/app/shared/share/share.module';

//import {MatButtonModule} from '@angular/material/button';

// import {MatListModule} from '@angular/material/list';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatInputModule} from '@angular/material/input';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ShareModule
  ]
})
export class TodoModule { }
