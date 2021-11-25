import { ServiceGeneralService } from "./../../../../core/services/service-general/service-general.service";
import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";

@Component({
  selector: "app-dialog-add-ticket",
  templateUrl: "./dialog-add-ticket.component.html",
  styleUrls: ["./dialog-add-ticket.component.css"],
})
export class DialogAddTicketComponent implements OnInit {
  public disabled = false;
  public today = new Date();
  public user;
  public data: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogAddTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public services: ServiceGeneralService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('data', this.data);

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
      .serviceGeneralGet("Ticket/" + this.param.id)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log("resp", this.data);
        }
      });
  }
  save(status) {
    this.disabled = true;
    this.services
      .serviceGeneralPut(
        `Ticket/${this.param.id}/${status}/${this.user.id}`,
        ""
      )
      .subscribe(
        (resp) => {
          if (resp.success) {
            console.log("exito", resp.result);
            this.dialogRef.close(1);
          }
        },
        (error) => {
          this.dialogRef.close(3);
        }
      );
  }
}
