import { Component, OnInit } from "@angular/core";
import { ServiceGeneralService } from "app/core/services/service-general/service-general.service";
import { DialogAddTicketComponent } from "../dialog/dialog-add-ticket/dialog-add-ticket.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";
@Component({
  selector: "app-mantenimiento",
  templateUrl: "./mantenimiento.component.html",
  styleUrls: ["./mantenimiento.component.css"],
})
export class MantenimientoComponent implements OnInit {
  public today = new Date();
  public data: any[] = [];

  constructor(
    public service: ServiceGeneralService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("get data");
    this.service.serviceGeneralGet("Ticketing").subscribe((resp) => {
      if (resp.success) {
        this.data = resp.result;
        console.log("data", this.data);
      }
    });
  }
  addTicket(id: number) {
    const dialogRef = this._dialog.open(DialogAddTicketComponent, {
      data: {
        id: id,
      },
      width: "30rem",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("resp", result);
      // result = 1 es update success
      // result = 3 es  update false
      if (result == 1) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "Se cambio satisfactoriamente el estatus del ticket.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }  else if (result == 3) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: "Error al cambiar el estatus del ticket.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });
  }
}
