import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
}) // Component decorator (São informações sobre a classe)
export class RolesComponent {
  //string, number, boolean, date, object, array (Tipos básicos em TS)
  firstname: string = "Matheus";
  lastname: string = "Silva"; 
  courseVersion: number = 10;
  todayDate: Date = new Date();
  arrayString: string[] = ["string 1", "string 2", "string 3"];
  
  inputType: string = "radio";
  selectedState: string = ""; 

  showWelcomeElement (){
    alert("Welcome to the Angular Course");
  }

  showMessage(message: string){
    alert(message);
  }


}
