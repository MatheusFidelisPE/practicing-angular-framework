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

  ngOnInit(): void {
    this.todoList.push({status:true,description:'minha descrição', realizationDate: new Date()});
    this.todoList.push({status:false,description:'minha descrição 2', realizationDate: new Date()})
  }
  
  
}
