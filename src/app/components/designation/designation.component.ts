import { Component, inject, Inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiResponseModel, IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  masterService = inject(MasterService);
  designationList: IDesignation[] = [];

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res:ApiResponseModel) => {
      this.designationList = res.data;
    }, error => {
      alert("API error/ Network down")});
  }
}
