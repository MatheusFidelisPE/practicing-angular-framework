import { Component } from '@angular/core';

@Component({
  selector: 'app-escape-button',
  imports: [],
  templateUrl: './escape-button.component.html',
  styleUrl: './escape-button.component.css'
})
export class EscapeButtonComponent {
  posicao = "center";

  moveText(){
    debugger;
   switch(this.posicao) {
      case 'text-start':
        this.posicao = 'text-center';
        break;
      case 'text-center':
        this.posicao = 'text-end';
        break;
      default:
        this.posicao = 'text-start';
    }
  }

}
