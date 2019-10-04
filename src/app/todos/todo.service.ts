import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	private todos: Todo[] = [
		{ id: 1, completed: false, title: 'Need to do something' },
		{ id: 2, completed: false, title: 'Need to do something' },
		{ id: 3, completed: false, title: 'Need to do something' },
		{ id: 4, completed: false, title: 'Need to do something' },
		{ id: 5, completed: false, title: 'Need to do something' },
		{ id: 6, completed: false, title: 'Need to do something' },
		{ id: 7, completed: false, title: 'Need to do something' },
		{ id: 8, completed: false, title: 'Need to do something' },
	];

	public todos$: Observable<Todo[]> = of(this.todos);
	constructor() {}

	updateTodo(todo: Todo) {
		const index = this.todos.findIndex((t: Todo) => t.id === todo.id);
		this.todos[index] = todo;
	}

	addTodo(title: string) {
		console.log('title:', title);
		this.todos.push({ id: this.todos.length + 1, title, completed: false });
	}
}
