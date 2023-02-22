import { CommonModule } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListServiceService, TodoItem } from './todo-list-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TodoItemComponent],
  template: `
    <section id="todo-section" class="mt-2 pl-2">
      <app-todo-item
        *ngFor="let item of todoItems$ | async; trackBy: todoItemsTrackBy"
        [todoItem]="item"
      >
      </app-todo-item>
    </section>

    <form class="flex mt-6 min-w-[400px]" [formGroup]="form" (ngSubmit)="onSubmit()">
      <input
        type="text"
        formControlName="name"
        name="name"
        placeholder="Write the to-do"
        class="mr-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      />
      <button class="rounded px-4 py-2 font-semibold text-sm bg-sky-500 text-white shadow-sm bg-blue" type="submit">Save</button>
    </form>
  `,
  styles: [
    `
      :host {
        @apply flex justify-center flex-col items-center;
      }
    `,
  ],
})
export class TodoListComponent {
  public todoItems$: Observable<TodoItem[]>;
  public form: FormGroup<{
    id: FormControl<string | null>;
    name: FormControl<string | null>;
    isCompleted: FormControl<boolean | null>;
  }>;

  constructor(
    todoListService: TodoListServiceService,
    formBuilder: FormBuilder
  ) {
    this.todoItems$ = todoListService.todoItems$;
    this.form = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      isCompleted: [false, Validators.required],
    });
  }

  todoItemsTrackBy: TrackByFunction<TodoItem> = (idx, item) => {
    return item.id;
  };

  onSubmit() {
    console.log(this.form);
  }
}
