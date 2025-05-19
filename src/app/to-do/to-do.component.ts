import { Component, EventEmitter, NgModule, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
    @Output() addTodo = new EventEmitter<string>();
    newTodo = '';

  onSubmit(): void {
    this.addTodo.emit(this.newTodo);
    this.newTodo = '';
}
}
