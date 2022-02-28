import { Component, OnInit } from "@angular/core";
import { ServiceGeneralService } from "app/core/services/service-general/service-general.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";
import { AddTareasComponent } from "../add-tareas/add-tareas.component";

@Component({
  selector: "app-tareas",
  templateUrl: "./tareas.component.html",
  styleUrls: ["./tareas.component.css"],
})
export class TareasComponent implements OnInit {
  public today = new Date();
  public data: any[] = [];

  constructor(
    public service: ServiceGeneralService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("get data");
    // this.service
    //   .serviceGeneralGet("StockChicken/Admin/All-Branch")
    //   .subscribe((resp) => {
    //     if (resp.success) {
    //       this.data = resp.result;
    //       console.log("data", this.data);
    //     }
    //   });
  }
  addStock(id: number) {
    const dialogRef = this._dialog.open(AddTareasComponent, {
      data: {
        id: id,
      },
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("resp", result);
      // result = 1 es add success
      // result = 2 es update success
      // result = 3 es add o update false
      if (result == 1) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "Se agrego satisfactoriamente la tarea.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 2) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "Se actualizo satisfactoriamente la tarea.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 3) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: "Error al agregar la tarea.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });
  }
}
