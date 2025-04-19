import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../service/client.service';
import { ApiResponseModel } from '../../model/class/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientService = inject(ClientService);
  clientObject: Client = new Client();
  clientList: Client[] = [];

  ngOnInit(): void {
    this.loadClient();
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
