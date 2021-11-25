import { ServiceGeneralService } from "./../../../../core/services/service-general/service-general.service";
import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";

@Component({
  selector: "app-dialog-add-stock-pollo",
  templateUrl: "./dialog-add-stock-pollo.component.html",
  styleUrls: ["./dialog-add-stock-pollo.component.css"],
})
export class DialogAddStockPolloComponent implements OnInit {
  public disabled = false;
  public today = new Date();
  public user;
  public data: StockModel = new StockModel();
  // ***********variables de validacion***********
  // ******variables de validacion ********
  public activeSalesExpectations = false;
  public activeAmount = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddStockPolloComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public services: ServiceGeneralService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log("data que se envia", this.param);
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log("user", this.user);
    if (this.param.id != 0) {
      this.getData();
    }
  }
  close() {
    this.dialogRef.close();
  }
  getData() {
    this.services
      .serviceGeneralGet("StockChicken/Admin/By-Branch/" + this.param.id)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log("resp", this.data);
        }
      });
  }
  validateSave() {
    if (
      this.data.salesExpectations == 0 ||
      this.data.salesExpectations == undefined ||
      this.data.salesExpectations == null
    ) {
      this.activeSalesExpectations = true;
    } else {
      this.activeSalesExpectations = false;
    }
    if (
      this.data.amount == 0 ||
      this.data.amount == undefined ||
      this.data.amount == null
    ) {
      this.activeAmount = true;
    } else {
      this.activeAmount = false;
    }
    if (
      this.data.salesExpectations == 0 ||
      this.data.salesExpectations === undefined ||
      this.data.salesExpectations == null ||
      this.data.amount == 0 ||
      this.data.amount === undefined ||
      this.data.amount == null
    ) {
      return;
    } else {
      this.save();
    }
  }
  save() {
    this.disabled = true;
    if (this.param.id == 0) {
      this.addStock();
    } else {
      this.updateStock();
    }
  }
  // this.close();
  addStock() {
    const obj = {
      id: 0,
      branchId: this.param.idBranch,
      salesExpectations: this.data.salesExpectations,
      amount: this.data.amount,
      createdBy: this.user.id,
      createdDate: this.today,
      updatedBy: this.user.id,
      updatedDate: this.today,
    };
    console.log("obj", obj);
    this.services
      .serviceGeneralPostWithUrl("StockChicken/Admin", obj)
      .subscribe(
        (resp) => {
          if (resp.success) {
            console.log("resp", resp);
            this.disabled = false;
            this.dialogRef.close(1);
          }
        },
        (error) => {
          this.dialogRef.close(3);
        }
      );
  }
  updateStock() {
    const obj = {
      id: this.data.id,
      branchId: this.data.branchId,
      salesExpectations: this.data.salesExpectations,
      amount: this.data.amount,
      createdBy: this.data.createdBy,
      createdDate: this.data.createdDate,
      updatedBy: this.user.id,
      updatedDate: this.today,
    };
    console.log("obj", obj);
    this.services.serviceGeneralPut("StockChicken/Admin", obj).subscribe(
      (resp) => {
        if (resp.success) {
          console.log("resp", resp);
          this.disabled = false;
          this.dialogRef.close(1);
        }
      },
      (error) => {
        this.dialogRef.close(3);
      }
    );
  }
}
class StockModel {
  id: number;
  branchId: number;
  salesExpectations: number;
  amount: number;
  createdBy: number;
  createdDate: Date;
  updatedBy: number;
  updatedDate: Date;
}
