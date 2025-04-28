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
  
  todoList : ITodoList[] = [];
  todoItem = {
    status:false,
    description:'', 
    realizationDate:new Date()
    };
  countValue: number = 0; 
  ngOnInit(): void {
    this.todoList.push({status:true,description:'minha descrição', realizationDate: new Date()});
    this.todoList.push({status:false,description:'minha descrição 2', realizationDate: new Date()})
  }
  onSubmit(todoForm:any):void{
    console.log('entrou no submit');
    this.todoList.push(this.todoItem);
    this.todoItem = {
      status:false, 
      description: '', 
      realizationDate:new Date()
    };

  }
  incrementValue(){
    this.countValue++;
  }
}
