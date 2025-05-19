import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainAppComponent } from './main-app/main-app.component';

@Component({
  selector: 'app-root',
  imports: [MainAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   @Input() todos: string[] = [];
  @Output() deleteTodo = new EventEmitter<number>();

  onDelete(index: number): void {
    this.deleteTodo.emit(index);
  }
}
