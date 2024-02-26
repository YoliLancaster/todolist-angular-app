import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() toDoClicked: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  // now it is set on aria with text only, should be transformed in styles with new design.
  // Add this function to whole block, add stopPropagation for categories & buttons.
  onTodoClicked() {
    this.toDoClicked.emit();
  }
}
