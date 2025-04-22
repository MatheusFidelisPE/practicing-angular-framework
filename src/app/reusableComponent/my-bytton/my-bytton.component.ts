import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-bytton',
  imports: [],
  templateUrl: './my-bytton.component.html',
  styleUrl: './my-bytton.component.css'
})
export class MyByttonComponent {
  @Input() btnText:string = '';
  @Input() btnClass: string = ''; 

  @Output() onBtnClick = new EventEmitter<any>();
  onClick(){
    debugger;
    this.onBtnClick.emit('admin');
  }
}
