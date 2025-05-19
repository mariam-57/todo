import { Component } from '@angular/core';
import { ToDoComponent } from '../to-do/to-do.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-app',
    standalone: true, // Add this
  imports: [ToDoComponent, TodoListComponent, CommonModule],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})

export class MainAppComponent {
 todos: string[] = [];

  addTodo(newTodo: string): void {
    if (newTodo.trim()) {
      this.todos.push(newTodo.trim());
    }
  }

  deleteTodo(index: number): void {
    this.todos = this.todos.filter((_, i) => i !== index);
  }
}
