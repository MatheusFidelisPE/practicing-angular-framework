import { Component, OnInit } from '@angular/core';
import { ITodoList } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeferBlockBehavior } from '@angular/core/testing';


@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{

  realTodolist : ITodoList[] = [];
  todoList : ITodoList[] = [];
  dateFilterForm:any;

  todoItem = {
    status:false,
    description:'', 
    realizationDate:new Date()
    };
  countValue: number = 0; 
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    var tasksString = localStorage.getItem('tasks');
    if(tasksString != null){
      this.realTodolist = JSON.parse(tasksString);
      this.todoList = this.realTodolist;
    }
    this.dateFilterForm = this.formBuilder.group({
      selectedDate:['']
      }
    );
  }
  onSubmit(todoForm:any):void{
    console.log('entrou no submit');
    this.realTodolist.push(this.todoItem);
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
    this.todoList.push(this.todoItem);
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
  filterByOpen(){
    this.todoList = this.realTodolist.filter(x => !x.status);
  }
  updateList(){
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
  }
  onFilterDate(dateFilterForm:FormGroup){
    debugger;
    const selectDateStr = dateFilterForm.value.selectedDate;
    console.log('data string'+selectDateStr);
    const selectedDate = new Date(selectDateStr);
    console.log(selectedDate.getFullYear());
    console.log(selectedDate.getMonth());
    console.log(selectedDate.getDate());
    this.todoList = this
        .realTodolist
        .filter(
          item => { 
            const itemDate = item.realizationDate;
            debugger;
            return itemDate.getFullYear() === selectedDate.getFullYear() &&
                   itemDate.getMonth() === selectedDate.getMonth() &&
                   itemDate.getDate() === selectedDate.getDate();
            
          });
  }

}
