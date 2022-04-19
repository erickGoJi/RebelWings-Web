import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ServiceGeneralService } from 'app/core/services/service-general/service-general.service';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DialogDetalleTareaComponent } from '../sucursales/dialog/dialog-detalle-tarea/dialog-detalle-tarea.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogDetallePolloPrecoccionComponent } from '../sucursales/dialog/dialog-detalle-pollo-precoccion/dialog-detalle-pollo-precoccion.component';
import { DialogDetalleMesaEsperaComponent } from '../sucursales/dialog/dialog-detalle-mesa-espera/dialog-detalle-mesa-espera.component';
import { DialogDetalleConteoPersonasComponent } from '../sucursales/dialog/dialog-detalle-conteo-personas/dialog-detalle-conteo-personas.component';
import { DialogDetalleEncuestaComponent } from '../sucursales/dialog/dialog-detalle-encuesta/dialog-detalle-encuesta.component';
import { DialogDetalleLimpiezaGeneralComponent } from '../sucursales/dialog/dialog-detalle-limpieza-general/dialog-detalle-limpieza-general.component';
// salon
import { DialogDetalleEstacionSalonComponent } from '../sucursales/dialog/dialog-detalle-estacion-salon/dialog-detalle-estacion-salon.component';
import { DialogDetalleTemperaturaBebidasSalonComponent } from '../sucursales/dialog/dialog-detalle-temperatura-bebidas-salon/dialog-detalle-temperatura-bebidas-salon.component';
import { DialogDetalleAudioVideoSalonComponent } from '../sucursales/dialog/dialog-detalle-audio-video-salon/dialog-detalle-audio-video-salon.component';
import { DialogDetalleFocosSalonComponent } from '../sucursales/dialog/dialog-detalle-focos-salon/dialog-detalle-focos-salon.component';
import { DialogDetalleLimpiezaBarraSalonComponent } from '../sucursales/dialog/dialog-detalle-limpieza-barra-salon/dialog-detalle-limpieza-barra-salon.component';
import { DialogDetalleRefrigeradoresSalonComponent } from '../sucursales/dialog/dialog-detalle-refrigeradores-salon/dialog-detalle-refrigeradores-salon.component';
// baños
import { DialogDetalleEstadoGeneralBanosComponent } from '../sucursales/dialog/dialog-detalle-estado-general-banos/dialog-detalle-estado-general-banos.component';
import { DialogDetalleLavabosJabonPapelBanosComponent } from '../sucursales/dialog/dialog-detalle-lavabos-jabon-papel-banos/dialog-detalle-lavabos-jabon-papel-banos.component';
// sistema
import { DialogDetalleTicketMesaSistemaComponent } from '../sucursales/dialog/dialog-detalle-ticket-mesa-sistema/dialog-detalle-ticket-mesa-sistema.component';
import { DialogDetalleEntradasAlbaranSistemaComponent } from '../sucursales/dialog/dialog-detalle-entradas-albaran-sistema/dialog-detalle-entradas-albaran-sistema.component';
import { DialogDetalleRevisionMesaSistemaComponent } from '../sucursales/dialog/dialog-detalle-revision-mesa-sistema/dialog-detalle-revision-mesa-sistema.component';
// mantenimiento
import { DialogDetalleCocinaMantenimientoComponent } from '../sucursales/dialog/dialog-detalle-cocina-mantenimiento/dialog-detalle-cocina-mantenimiento.component';
import { DialogDetalleSalonMantenimientoComponent } from '../sucursales/dialog/dialog-detalle-salon-mantenimiento/dialog-detalle-salon-mantenimiento.component';
import { DialogDetalleBanosMantenimientoComponent } from '../sucursales/dialog/dialog-detalle-banos-mantenimiento/dialog-detalle-banos-mantenimiento.component';
import { DialogDetalleBarraMantenimientoComponent } from '../sucursales/dialog/dialog-detalle-barra-mantenimiento/dialog-detalle-barra-mantenimiento.component';


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
  public dataTask;
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
      this.services.serviceGeneralGet(`Dashboard/${branch}/Regional?dateTime=${date}`).subscribe(resp => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data dash', this.data);
        }
      });
      this.getNameBranch();
    }
  }

  detail(data: any, area: number) {
    console.log('data', data);
    // cocina la mayoria de las tareas se obtiene por id de branch
    // aqui se armara el objeto para que se reutilize el modal detalle de tarea
    // cocina
    if (area === 1) {
      switch (data.name) {
        case 'Órdenes':
          console.log('Órdenes');
          this.services
            .serviceGeneralGet(`Order/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoOrders;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Refrigeradores':
          console.log('Refrigeradores');
          this.services
            .serviceGeneralGet(`Fridge/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoFridges;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Pollo con precocción':
          console.log('Pollo con precocción');
          this.services
            .serviceGeneralGet(`PrecookedChicken/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoPrecookedChickens;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetallePolloPrecoccionComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Productos completos y en Órden':
          console.log('Productos completos y en Órden');
          this.services
            .serviceGeneralGet(`CompleteProductsInOrder/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoCompleteProductsInOrders;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Limpieza de freidoras':
          console.log('Limpieza de freidoras');
          this.services
            .serviceGeneralGet(`Fryer/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoFryerCleanings;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
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
    // salon
    else if (area === 2) {
      switch (data.name) {
        case 'Conteo de personas':
          console.log('Conteo de personas');
          this.services
            .serviceGeneralGet(`PeopleCounting/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleConteoPersonasComponent, {
                  data: {
                    name: data.name,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Encuesta':
          // falta conectar modal
          console.log('Encuesta');
          this.services
            .serviceGeneralGet(`SatisfactionSurvey/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleEncuestaComponent, {
                  data: {
                    name: data.name,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Limpieza general':
          console.log('Limpieza general');
          this.services
            .serviceGeneralGet(`GeneralCleaning/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoGeneralCleanings;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleLimpiezaGeneralComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Estación':
          console.log('Estación');
          this.services
            .serviceGeneralGet(`Station/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoStations;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleEstacionSalonComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Temperatura de Bebidas':
          console.log('Temperatura de Bebidas');
          this.services
            .serviceGeneralGet(`DrinksTemperature/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoDrinksTemperatures;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTemperaturaBebidasSalonComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Audio y Video':
          console.log('Audio y Video');
          this.services
            .serviceGeneralGet(`AudioVideo/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleAudioVideoSalonComponent, {
                  data: {
                    data: this.dataTask,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Focos':
          console.log('Focos');
          this.services
            .serviceGeneralGet(`Spotlight/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleFocosSalonComponent, {
                  data: {
                    name: data.name,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Limpieza en barra':
          console.log('Limpieza en barra');
          this.services
            .serviceGeneralGet(`BarCleaning/${data.detail}/By-Id/`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoBarCleanings;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleLimpiezaBarraSalonComponent, {
                  data: {
                    name: data.name,
                    photos: this.photosTemp,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Refrigeradores':
          console.log('Refrigeradores');
          this.services
            .serviceGeneralGet(`FridgeSalon/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoFridgeSalons;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleRefrigeradoresSalonComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
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

    // baños
    else if (area === 3) {
      switch (data.name) {
        case 'Estado General':
          console.log('Estado General');
          this.services
            .serviceGeneralGet(`BathRoomsOverallStatus/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleEstadoGeneralBanosComponent, {
                  data: {
                    name: data.name,
                    data: this.dataTask,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Lavabos con jabón y papel':
          console.log('Lavabos con jabón y papel');
          this.services
            .serviceGeneralGet(`WashBasinWithSoapPaper/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoWashBasinWithSoapPapers;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleLavabosJabonPapelBanosComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
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

    // sistema y caja
    else if (area === 4) {
      switch (data.name) {

        case 'Ticket y Mesa':
          console.log('Ticket y Mesa');
          this.services
            .serviceGeneralGet(`TicketTable/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoTicketTables;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTicketMesaSistemaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'ENTRADAS CARGADAS COMO ALBARÁN ':
          console.log('ENTRADAS CARGADAS COMO ALBARÁN');
          this.services
            .serviceGeneralGet(`EntriesChargedAsDeliveryNote/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoEntriesChargedAsDeliveryNotes;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleEntradasAlbaranSistemaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Revisión de Pedido vs calendario':
          console.log('Revisión de Pedido vs calendario');
          this.services
            .serviceGeneralGet(`OrderScheduleReview/${data.detail}/By-Id`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoOrderScheduleReviews;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleTareaComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Revisión de Mesas':
          console.log('Revisión de Mesas');
          this.services
            .serviceGeneralGet(`CheckTable/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleRevisionMesaSistemaComponent, {
                  data: {
                    data: this.dataTask,
                    name: data.name,
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

    // mantenimiento
    else if (area === 5) {
      switch (data.name) {

        case 'Cocina':
          console.log('Cocina');
          this.services
            .serviceGeneralGet(`Kitchen/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoKitchens;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleCocinaMantenimientoComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Salon':
          console.log('Salon');
          this.services
            .serviceGeneralGet(`Salon/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoSalons;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleSalonMantenimientoComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Baños':
          console.log('Baños');
          this.services
            .serviceGeneralGet(`Bathroom/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoBathrooms;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleBanosMantenimientoComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
                  },
                  width: "30rem",
                });
                dialog.afterClosed().subscribe();
              }
            });
          break;

        case 'Barra':
          console.log('Barra');
          this.services
            .serviceGeneralGet(`Bar/By-Id/${data.detail}`)
            .subscribe((resp) => {
              if (resp.success) {
                this.dataTask = resp.result;
                this.photosTemp = this.dataTask.photoBars;
                console.log('get data', this.dataTask);
                const dialog = this.dialog.open(DialogDetalleBarraMantenimientoComponent, {
                  data: {
                    data: this.dataTask,
                    photos: this.photosTemp,
                    name: data.name,
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
