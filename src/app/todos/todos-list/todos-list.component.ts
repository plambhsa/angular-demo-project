import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
	selector: 'md-todos-list',
	templateUrl: './todos-list.component.html',
	styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
	public todos$: Observable<Todo[]>;

	constructor(private _todoService: TodoService) {}

	ngOnInit() {
		this.todos$ = this._todoService.todos$;
	}

	updateTodo(todo: Todo, completed: boolean) {
		todo.completed = completed;
		this._todoService.updateTodo(todo);
	}

	addTodo(title: string) {
		console.log(title);
		this._todoService.addTodo(title);
	}
}
