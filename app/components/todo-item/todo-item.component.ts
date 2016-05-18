import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {TrimPipe} from '../../pipes/trim.pipe';

@Component({
    selector: 'todo-item',
    template: `
        <li [class.completed]="todo.completed" [class.editing]="isBeingEdited">
            <div class="view">
                <input class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed">
                <label (dblclick)="setEditing(true)">{{ todo.title | trim }}</label>
                <button class="destroy" (click)="remove()"></button>
            </div>
            <input class="edit" *ngIf="isBeingEdited" [(ngModel)]="todo.title" (keyup.enter)="saveChanges()">
        </li>
    `,
    pipes: [TrimPipe]
})
export class TodoItemComponent {

    @Input()
    todo:TodoModel;

    @Output()
    onModified = new EventEmitter();

    @Output()
    onRemoved = new EventEmitter();

    isBeingEdited:boolean;

    toggleCompletion() {
        this.todo.completed = !this.todo.completed;
        this.onModified.emit(null);
    }

    setEditing(editing:boolean) {
        if (!editing && this.todo.title.length == 0) {
            this.remove();
        }
        this.isBeingEdited = editing;
    }

    saveChanges() {
        this.onModified.emit(null);
        this.setEditing(false);
    }

    remove() {
        this.onRemoved.emit(null);
    }
}
