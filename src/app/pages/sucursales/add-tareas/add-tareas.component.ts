
import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { ServiceGeneralService } from "./../../../core/services/service-general/service-general.service";

@Component({
  selector: "app-add-tareas",
  templateUrl: "./add-tareas.component.html",
  styleUrls: ["./add-tareas.component.css"],
})

export class AddTareasComponent implements OnInit {
  public disabled = false;
  public today = new Date();
  public user;
  public data: any[] = [];
  // ***********variables de validacion***********
  // ******variables de validacion ********
  public activeNombre = false;
  public activeTurno = false;
  public activeDescripcion = false;
  public activeSupervisor = false;
  public activeSucursal = false;


  constructor(public dialogRef: MatDialogRef<AddTareasComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public services: ServiceGeneralService,
    public _dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addStock(id){
    console.log('agregar tarea');

  }

}
