import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ServiceGeneralService } from 'app/core/services/service-general/service-general.service';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dasboard-regional',
  templateUrl: './dasboard-regional.component.html',
  styleUrls: ['./dasboard-regional.component.css']
})
export class DasboardRegionalComponent implements OnInit {

  public chartColor;
  public chartEmail;
  public chartHours;
  public activeDate = false;

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


  constructor(public services: ServiceGeneralService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log('user', this.user);
    this.getdataBranch();
  }
  getDataDash( branch, date) {
    console.log('sucursal', branch);
    console.log('dateDash', date);
    if (branch == undefined || date == undefined) {
      return
    }
    else {
      console.log(date);
      this.services.serviceGeneralGet(`Dashboard/${branch}/Regional?dateTime=${date}`).subscribe(resp => {
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
