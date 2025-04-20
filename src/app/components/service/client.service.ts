import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../model/class/Client';
import { ApiResponseModel } from '../../model/class/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
   }

   getAllClients():Observable<ApiResponseModel>{
    return this
            .http
            .get<ApiResponseModel>(environment.API_CLIENT_URL+"GetAllClients");
   }
   addUpdate(obj:Client):Observable<ApiResponseModel>{
    return this
            .http
            .post<ApiResponseModel>(environment.API_CLIENT_URL+"AddUpdateClient", obj);
   }
   deleteClientById(id:number):Observable<ApiResponseModel>{
    return this
            .http
            .delete<ApiResponseModel>(environment.API_CLIENT_URL +"DeleteClientByClientId?clientId="+id);
   }
   getAllEmployees():Observable<ApiResponseModel>{
    return this
            .http
            .get<ApiResponseModel>(environment.API_EMPLOYEE_URL+"GetAllEmployee");
   }
   addClientProject(obj:Client):Observable<ApiResponseModel>{
    return this
            .http
            .post<ApiResponseModel>(environment.API_CLIENT_URL+"AddUpdateClientProject", obj);
   }
}
