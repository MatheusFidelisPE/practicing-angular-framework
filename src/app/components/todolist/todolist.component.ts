import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{
  
  realTodolist : ITodoList[] = [];
  todoList : ITodoList[] = [];
  todoItem = {
    status:false,
    description:'', 
    realizationDate:new Date()
    };
  countValue: number = 0; 
  ngOnInit(): void {
    var tasksString = localStorage.getItem('tasks');
    if(tasksString != null){
      this.realTodolist = JSON.parse(tasksString);
      this.todoList = this.realTodolist;
    }
  
  }
  onSubmit(todoForm:any):void{
    console.log('entrou no submit');
    this.realTodolist.push(this.todoItem);
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
    this.todoItem = {
      status:false, 
      description: '', 
      realizationDate:new Date()
    };
  }
  filterByClosed(){
    this.todoList = this.realTodolist.filter(x => x.status);
  }
  showAllTasks(){
    this.todoList = this.realTodolist;
  }
  updateList(){
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
  }
}
