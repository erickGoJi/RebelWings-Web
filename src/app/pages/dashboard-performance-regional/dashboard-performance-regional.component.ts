import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceGeneralService } from 'app/core/services/service-general/service-general.service';

@Component({
  selector: 'app-dashboard-performance-regional',
  templateUrl: './dashboard-performance-regional.component.html',
  styleUrls: ['./dashboard-performance-regional.component.css']
})
export class DashboardPerformanceRegionalComponent implements OnInit {
  public user: any;
  public ciudad;
  public catState: any[] = [];
  public catSucursal: any[] = [];
  public catRegionales: any[] = [];
  public regional;
  public db; 
  public dateDash;
  public dateDashTwo;
  public data: any;

  constructor(public services: ServiceGeneralService,private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userData"));
    this.getdataState();
  }

  getdataState() {
    this.services.serviceGeneralGet("User/GetStateList").subscribe((resp) => {
      if (resp.success) {
        this.catState = resp.result;
        console.log("resp state", this.catState);
      }
    });
  }

  getdataRegional(id){
    this.catRegionales = []; 
    this.services.serviceGeneralGet(`User/Regionals/${id}`).subscribe((resp) => {
      if (resp.success) {
        this.catRegionales = resp.result;
        console.log("resp regionales", this.catRegionales);
      }
    });
  }

  getDataDash(ciudad, regional, dateOne, dateTwo) {
    console.log('regional', regional);
    console.log('ciudad', ciudad);
    console.log('dateDash', dateOne, dateTwo);
    if (ciudad == undefined || dateOne == undefined || dateTwo == undefined || regional == undefined) {
      return
    }
    else {
      this.data = null;
      this.services.serviceGeneralGet(`Dashboard/performance-general/${ciudad}/${regional}?startDate=${dateOne}&endDate=${dateTwo}`).subscribe(resp => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data dash', this.data);
        }
      });
    }
  }

  detail(item: any){
    this.router.navigate(['/regionales', 
      { 
        city: this.ciudad, 
        regional: this.regional, 
        dateOne: this.dateDash, 
        dateTwo: this.dateDashTwo,
        branch: item.idBranch
      }
    ]);
  }

}
