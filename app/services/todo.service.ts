import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {TodoFilter} from '../enums/todo-filter.enum';

const TODOS: string = 'todos';

@Injectable()
export class TodoService {

    private _todos: TodoModel[] = [];

    constructor() {
        Object.assign(this._todos, JSON.parse(localStorage.getItem(TODOS)));
    }

    getTodos(filter: TodoFilter = null): TodoModel[] {
        var todos = this._todos;
        if (filter == TodoFilter.Active) {
            todos = todos.filter(t => !t.completed);
        }
        else if (filter == TodoFilter.Completed) {
            todos = todos.filter(t => t.completed);
        }
        return todos;
    }

    addTodo(title: string) {
        var todo = new TodoModel(title);
        this._todos.push(todo);
        this.saveChanges();
    }

    removeTodo(todo: TodoModel) {
        var todos = this._todos;
        var todo = todos.find(t => t.id == todo.id);
        todos.splice(todos.indexOf(todo), 1);
        this.saveChanges();
    }

    saveChanges() {
        localStorage.setItem(TODOS, JSON.stringify(this._todos));
    }
}
