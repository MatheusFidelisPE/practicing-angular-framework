import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { ApiResponseModel, IEmployee } from '../../../model/class/interface/role';
import { Client } from '../../../model/class/Client';


@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  hojer: Date = new Date();
  projectForm:FormGroup = new FormGroup({
    clientProjectId:        new FormControl(0),
    projectName:            new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    startDate:              new FormControl(this.hojer.toISOString().split('T')[0]),
    expectedEndDate:        new FormControl(""),
    leadByEmpId:            new FormControl(""),
    completedDate:          new FormControl(""),
    contactPerson:          new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking:        new FormControl(""),
    projectCost:            new FormControl(""),
    projectDetails:         new FormControl(""),
    contactPersonEmailId:   new FormControl(""),
    clientId:               new FormControl("")
  });
  clientService = inject(ClientService);
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];
  
  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClients();
  }

  getAllEmployee(){
    this.clientService.getAllEmployees().subscribe((response: ApiResponseModel) => {
      if(response.result){
        this.employeeList = response.data;
      }
    });
  }
  getAllClients(){
    this.clientService.getAllClients().subscribe((response: ApiResponseModel) => {
      if(response.result){
        this.clientList = response.data;
      }
    });
  }
  onSaveProject(){
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addClientProject(formValue).subscribe((response: ApiResponseModel) => {
      if(response.result){
        alert(response.message);
        this.projectForm.reset();
      }else{
        alert(response.message);
      }
    });  
  }


}


