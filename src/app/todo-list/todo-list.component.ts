import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  todoTitle!: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    this.todoTitle = '';
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  //template driven forms needed
  addTodo(){
  if (this.todoTitle.trim().length === 0){
    return
  }
  this.todos.push({
    text: this.todoTitle,
    completed: false
    })

    this.todoTitle = '';
   }
}
