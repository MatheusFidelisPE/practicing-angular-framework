import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../model/class/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }

   getDesignations(): Observable<ApiResponseModel> {
    return this
    .http
    .get<ApiResponseModel>(environment.API_EMPLOYEE_URL+ "GetAllDesignation");
   }
}
