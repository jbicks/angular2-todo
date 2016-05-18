import {bootstrap}    from '@angular/platform-browser-dynamic';
import {TodosComponent} from './components/todos/todos.component';
import {TodoService} from './services/todo.service';

bootstrap(TodosComponent, [TodoService]);
