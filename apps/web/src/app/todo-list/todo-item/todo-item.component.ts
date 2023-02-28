import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-list-service.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-between">
      <label class="mr-3" [for]="todoItem?.id">{{todoItem?.name}}</label>
      <input type="checkbox" [name]="todoItem?.id" [value]="todoItem?.isCompleted">
    </div>
  `,
  styles: [
    `
      :host {
        @apply grid grid-rows-1 gap-4 min-w-[400px];
      }
    `
  ],
})
export class TodoItemComponent {
  @Input()
  todoItem: TodoItem | undefined;

}
