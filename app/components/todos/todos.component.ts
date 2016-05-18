import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {TodoHeaderComponent} from '../todo-header/todo-header.component';
import {TodoFooterComponent} from '../todo-footer/todo-footer.component';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoModel} from '../../models/todo.model';
import {TodoFilter} from '../../enums/todo-filter.enum';

@Component({
    selector: 'todos',
    templateUrl: 'app/components/todos/todos.template.html',
    directives: [TodoHeaderComponent, TodoFooterComponent, TodoItemComponent]
})
export class TodosComponent {

    filter:TodoFilter = TodoFilter.All;

    constructor (private _todoService:TodoService) {
    }

    setFilter(filter:TodoFilter) {
        this.filter = filter;
    }

    getTodoCount() {
        return this._todoService.getTodos().length;
    }

    getTodos():TodoModel[] {
        return this._todoService.getTodos(this.filter);
    }

    add(title:string) {
        this._todoService.addTodo(title);
    }

    update() {
      this._todoService.saveChanges();
    }

    remove (todo:TodoModel) {
        this._todoService.removeTodo(todo);
    }
}
