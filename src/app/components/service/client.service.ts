import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../model/class/Client';
import { ApiResponseModel } from '../../model/class/interface/role';
import { Constant } from '../../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
   }

   getAllUsers():Observable<ApiResponseModel>{
    return this
            .http
            .get<ApiResponseModel>("https://jsonplaceholder.typicode.com/users");
   }
   getAllClients():Observable<ApiResponseModel>{
    return this
            .http
            .get<ApiResponseModel>(environment.API_CLIENT_URL+Constant.API_METHOD.GET_ALL_CLIENT);
   }
   addUpdate(obj:Client):Observable<ApiResponseModel>{
    return this
            .http
            .post<ApiResponseModel>(environment.API_CLIENT_URL+Constant.API_METHOD.ADD_UPDATE_CLIENT, obj);
   }
   deleteClientById(id:number):Observable<ApiResponseModel>{
    return this
            .http
            .delete<ApiResponseModel>(environment.API_CLIENT_URL +"DeleteClientByClientId?clientId="+id);
   }
   getAllEmployees():Observable<ApiResponseModel>{
    return this
            .http
            .get<ApiResponseModel>(environment.API_EMPLOYEE_URL+Constant.API_METHOD.GET_ALL_EMPLOYEE);
   }
   addClientProject(obj:Client):Observable<ApiResponseModel>{
    return this
            .http
            .post<ApiResponseModel>(environment.API_CLIENT_URL+"AddUpdateClientProject", obj);
   }
}
