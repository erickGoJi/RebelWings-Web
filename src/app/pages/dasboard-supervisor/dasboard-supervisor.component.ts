import { Component, OnInit } from '@angular/core';
import { ServiceGeneralService } from 'app/core/services/service-general/service-general.service';
import { DialogDetalleTareaComponent } from '../sucursales/dialog/dialog-detalle-tarea/dialog-detalle-tarea.component';
import { DialogDetalleMesaEsperaComponent } from '../sucursales/dialog/dialog-detalle-mesa-espera/dialog-detalle-mesa-espera.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogDetalleProductoRiesgoComponent } from '../sucursales/dialog/dialog-detalle-producto-riesgo/dialog-detalle-producto-riesgo.component';


@Component({
  selector: 'app-dasboard-supervisor',
  templateUrl: './dasboard-supervisor.component.html',
  styleUrls: ['./dasboard-supervisor.component.css']
})
export class DasboardSupervisorComponent implements OnInit {
  // variables
  public user: any;
  public data: any;
  public dataBranch: any[] = [];
  public sucursal;
  public nameBranch;
  public dataTask;

  // variables de calendario
  public today = new Date();
  public dateDash;
  public dateFormat;

  // obj temp para mandar las fotos al modal
  public photosTemp;

  constructor(public services: ServiceGeneralService, public dialog: MatDialog) { }

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
        }/Supervisor?dateTime=${date}`).subscribe(resp => {
          if (resp.success) {
            this.data = resp.result;
            console.log('data dash', this.data);
          }
        });
      this.getNameBranch();
    }
  }
  detail(data: any, area: number) {
    this.dataTask = [];
    console.log('data', data);
    console.log('area', area);

    // cocina la mayoria de las tareas se obtiene por id de branch
    // aqui se armara el objeto para que se reutilize el modal detalle de tarea
    // matutino
    if (area === 1) {
      switch (data.nameTask) {
        case 'Validación de asistencias':

          break;
        case 'Validación de gas':
          console.log('validacion de gas');
          this.services
            .serviceGeneralGet('ValidationGas/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoValidationGas;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;
        case 'Stock de pollo':
          break;
        case 'SALÓN MONTADO':
          console.log('SALÓN MONTADO');
          this.services
            .serviceGeneralGet('ToSetTable/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoToSetTables;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;
        case 'Mesas en espera':

          console.log('Mesas en espera');
          this.services
            .serviceGeneralGet('WaitListTable/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleMesaEsperaComponent, {
                  data: {
                    data: this.dataTask,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;
        default:
          break;
      }
    }
    // vespertino
    else if (area === 2) {
      console.log('turno vespertino');

      switch (data.nameTask) {
        case 'Validación de asistencias':

          break;
        case 'Stock de pollo':

          break;
        case 'Producto en riesgo':
          console.log('Producto en riesgo');
          this.services
            .serviceGeneralGet('RiskProduct/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleProductoRiesgoComponent, {
                  data: {
                    name: data.nameTask,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;
        case 'RESGUARDO DE PROPINA':
          console.log('RESGUARDO DE PROPINA');
          this.services
            .serviceGeneralGet('Tip/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoTips;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;
        case 'Limpieza de salón y baños':
          console.log('Limpieza de salón y baños');
          this.services
            .serviceGeneralGet('LivingRoomBathroomCleaning/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoLivingRoomBathroomCleanings;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Resguardo de tabletas':
          console.log('Limpieza de salón y baños');
          this.services
            .serviceGeneralGet('TabletSafeKeeping/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoTabletSageKeepings;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;

        case 'Alarmas':
          console.log('Alarmas');
          this.services
            .serviceGeneralGet('Alarm/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoAlarms;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;
        case 'Mesas en espera':
          console.log('Mesas en espera');
          this.services
            .serviceGeneralGet('WaitListTable/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleMesaEsperaComponent, {
                  data: {
                    name: data.nameTask,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;

        case 'Volado de efectivo':
          console.log('Volado de efectivo');
          this.services
            .serviceGeneralGet('CashRegisterShortage/' + data.detail)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoCashRegisterShortages;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.nameTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });

          break;
        case 'ALBARANES':

          break;
        case 'Remisiones':

          break;

        default:
          break;
      }
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

