import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../service/client.service';
import { ApiResponseModel } from '../../model/class/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  currentDate: Date = new Date();
  clientService = inject(ClientService);
  clientObject: Client = new Client();
  clientList: Client[] = [];

  userList$:Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((data:ApiResponseModel) => {
      if(data.result){
        this.clientList = data.data;
      }
    });
  }

  onSaveClient(){
    this.clientService.addUpdate(this.clientObject).subscribe((res:ApiResponseModel) => {
      if(res.result){
       alert("Client created successfully");
       this.loadClient();
       this.clientObject = new Client();
      }else{
        alert("Client creation failed");
      }
    });
  }
  onDelete(id: number){
    
    const isDelete = confirm("Are you sure to delete this client?");
    if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res:ApiResponseModel) => {
        if(res.result){
          alert("Client Deleted successfully");
          this.loadClient();
        }else{
          alert(res.message);
        }
      });
    }
  }

  onEdit(client: Client){
    this.clientObject = client;
  }
  onResetForm(){
    this.clientObject = new Client();
  }
}
