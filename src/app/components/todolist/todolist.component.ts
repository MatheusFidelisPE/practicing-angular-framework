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
export class TodolistComponent implements OnInit {

  realTodolist: ITodoList[] = [];
  todoList: ITodoList[] = [];
  dateFilterForm: any;

  todoItem = {
    status: false,
    description: '',
    realizationDate: new Date()
  };
  countValue: number = 0;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    var tasksString = localStorage.getItem('tasks');
    if (tasksString != null) {
      this.realTodolist = JSON.parse(tasksString);
      this.todoList = this.realTodolist;
    }
    this.dateFilterForm = this.formBuilder.group({
      selectedDate: ['']
    }
    );
  }
  onSubmit(todoForm: any): void {
    console.log('entrou no submit');
    this.realTodolist.push(this.todoItem);
    this.todoList = this.realTodolist;
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
    // this.todoList.push(this.todoItem);
    this.todoItem = {
      status: false,
      description: '',
      realizationDate: new Date()
    };
  }
  onFilterDate(dateFilterForm: FormGroup) {
    const utcSelectedDate = new Date(dateFilterForm.value.selectedDate);
    const utcSelectedBrDate = new Date(utcSelectedDate.getTime() + (3 * 60 * 60 * 1000));
    

    this.todoList = this
      .realTodolist
      .filter(
        item => {
          const utcDate = new Date(item.realizationDate);
          const utcBrDate = new Date(utcDate.getTime() - (3 * 60 * 60 * 1000));
          

          return utcBrDate.getFullYear() === utcSelectedBrDate.getFullYear() &&
            utcBrDate.getMonth() === utcSelectedBrDate.getMonth() &&
            utcBrDate.getDate() === utcSelectedBrDate.getDate();
        });
  }
  filterByClosed() {
    this.todoList = this.realTodolist.filter(x => x.status);
  }
  showAllTasks() {
    this.todoList = this.realTodolist;
  }
  filterByOpen() {
    this.todoList = this.realTodolist.filter(x => !x.status);
  }
  updateList() {
    localStorage.setItem('tasks', JSON.stringify(this.realTodolist));
  }

}
