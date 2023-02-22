import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TodoItem {
  id: string;
  name: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoListServiceService {
  public todoItems$: Observable<TodoItem[]> = of([
    {
      id: '1',
      name: 'Create a todo',
      isCompleted: false,
    } as TodoItem,
    {
      id: '2',
      name: 'Go to the GYM',
      isCompleted: false,
    } as TodoItem,
    {
      id: '3',
      name: 'Make a party to Jessica',
      isCompleted: false,
    } as TodoItem,
  ]);
}
