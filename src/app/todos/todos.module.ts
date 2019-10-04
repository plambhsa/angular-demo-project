import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
	declarations: [TodosListComponent],
	imports: [CommonModule, FormsModule, TodosRoutingModule],
})
export class TodosModule {}
