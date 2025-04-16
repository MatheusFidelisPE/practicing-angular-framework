import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
}) // Component decorator (São informações sobre a classe)
export class RolesComponent implements OnInit{
  
  http = inject(HttpClient);
  roleList: IRole[] = [];
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this
      .http
      .get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles")
      .subscribe((res: ApiResponseModel) => {
        this.roleList = res.data;
      }
        )
  }

  //string, number, boolean, date, object, array (Tipos básicos em TS)
  // firstname: string = "Matheus";
  // lastname: string = "Silva"; 
  // courseVersion: number = 10;
  // todayDate: Date = new Date();
  // arrayString: string[] = ["string 1", "string 2", "string 3"];
  
  // inputType: string = "radio";
  // selectedState: string = ""; 

  // showWelcomeElement (){
  //   alert("Welcome to the Angular Course");
  // }

  // showMessage(message: string){
  //   alert(message);
  // }


}
