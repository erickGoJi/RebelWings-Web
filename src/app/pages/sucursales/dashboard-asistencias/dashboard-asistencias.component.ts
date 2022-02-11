import { Component, OnInit } from '@angular/core';
import { ServiceGeneralService } from 'app/core/services/service-general/service-general.service';
@Component({
  selector: 'app-dashboard-asistencias',
  templateUrl: './dashboard-asistencias.component.html',
  styleUrls: ['./dashboard-asistencias.component.css']
})
export class DashboardAsistenciasComponent implements OnInit {

  // variables
  public user: any;
  public data: any;
  public dataBranch: any[] = [];
  public sucursal;
  public nameBranch;

  // variables de calendario
  public today = new Date();
  public dateDash;
  public dateFormat;

  constructor(public services: ServiceGeneralService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log('user', this.user);
    this.getdataBranch();

  }
  getDataDash(branch, date) {
    console.log('sucursal', branch);
    console.log('dateDash', date);
    if (branch == undefined || date == undefined) {
      return
    }
    else {
      console.log(date);
      this.services.serviceGeneralGet(`Dashboard/${branch
        }/Assistance?dateTime=${date}`).subscribe(resp => {
          if (resp.success) {
            this.data = resp.result;
            console.log('data dash', this.data);
          }
        });
      this.getNameBranch();
    }
  }
  getdataBranch() {
    this.services
      .serviceGeneralGet("StockChicken/Admin/All-Branch")
      .subscribe((resp) => {
        if (resp.success) {
          this.dataBranch = resp.result;
          console.log("resp", this.dataBranch);
        }
      });
  }

  getNameBranch() {
    let branchIdNumber = 0;
    branchIdNumber = Number(this.sucursal);
    this.dataBranch.forEach(element => {
      if (element.branchId === branchIdNumber) {
        this.nameBranch = element.branchName;
        this.nameBranch = this.nameBranch.toUpperCase();
        console.log('nombre', this.nameBranch);
      }
    });
  }

}
