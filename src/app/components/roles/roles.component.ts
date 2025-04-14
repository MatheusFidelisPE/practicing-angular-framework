import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
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
  

}
