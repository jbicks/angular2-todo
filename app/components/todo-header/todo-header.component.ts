import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'todo-header',
    template: `
        <header class="header">
            <h1>Todos</h1>
            <input [(ngModel)]="title" class="new-todo" placeholder="What needs to be done?" (keyup.enter)="addTodo()">
        </header>
    `
})
export class TodoHeaderComponent {

    @Output('todo-added')
    onAdded:EventEmitter<string> = new EventEmitter();

    title:string; 

    addTodo() {
        this.onAdded.emit(this.title);
        this.title = '';
    }
}
