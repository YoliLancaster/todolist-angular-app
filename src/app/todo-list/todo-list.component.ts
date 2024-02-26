import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/todo.model";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos!: Todo[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.todos = this.dataService.getAllTodos()
  }

  toggleCompleted(todo: Todo){
  todo.completed = !todo.completed;
  }

}
