import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-todo-list',
  imports: [ FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
   @Input() todos: string[] = [];
  @Output() deleteTodo = new EventEmitter<number>();

  onDelete(index: number): void {
    this.deleteTodo.emit(index);
  }

}
