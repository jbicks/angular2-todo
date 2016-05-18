import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoFilter} from '../../enums/todo-filter.enum';

@Component({
    selector: 'todo-footer',
    template: `
    <footer class="footer" *ngIf="count">
        <ul class="filters">
            <li>
                <a href="#" [class.selected]="filter == filters.All" (click)="setFilter(filters.All)">All</a>
            </li>
            <li>
                <a href="#" [class.selected]="filter == filters.Active" (click)="setFilter(filters.Active)">Active</a>
            </li>
            <li>
                <a href="#" [class.selected]="filter == filters.Completed" (click)="setFilter(filters.Completed)">Completed</a>
            </li>
        </ul>
    </footer>
    `
})
export class TodoFooterComponent {

    @Input()
    count:number;

    @Input()
    filter: TodoFilter;

    @Output('filter-changed')
    onFilterChanged:EventEmitter<TodoFilter> = new EventEmitter();

    filters = TodoFilter;

    setFilter(filter:TodoFilter) {
        this.onFilterChanged.emit(filter);
        return false;
    }
}
