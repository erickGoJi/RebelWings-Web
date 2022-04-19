import { Component, OnInit } from "@angular/core";
import { ServiceGeneralService } from "app/core/services/service-general/service-general.service";
import { DialogAddStockPolloComponent } from "../dialog/dialog-add-stock-pollo/dialog-add-stock-pollo.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";

@Component({
  selector: "app-stock-pollo",
  templateUrl: "./stock-pollo.component.html",
  styleUrls: ["./stock-pollo.component.css"],
})
export class StockPolloComponent implements OnInit {
  public today = new Date();

  public data: any[] = [];

  constructor(
    public service: ServiceGeneralService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("get data");
    this.service
      .serviceGeneralGet("StockChicken/Admin/All-Branch")
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log("data", this.data);
        }
      });
  }
  addStock(id: number, name: string, branch: number) {
    const dialogRef = this._dialog.open(DialogAddStockPolloComponent, {
      data: {
        id: id,
        sucursal: name,
        idBranch: branch,
      },
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
            body: "Se agrego satisfactoriamente la espectativa de venta.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 2) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "Se actualizo satisfactoriamente la espectativa de venta.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 3 ) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: "Error al agregar la espectativa de venta.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });
  }
}
