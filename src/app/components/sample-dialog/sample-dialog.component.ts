import { Component, inject } from "@angular/core";
import { DialogRef } from "@angular/cdk/dialog";
import { NighthawkButtonDirective } from "ngx-nighthawk";

@Component({
  selector: "app-sample-dialog",
  templateUrl: "sample-dialog.component.html",
  styleUrls: ["./sample-dialog.component.scss"],
  imports: [NighthawkButtonDirective],
})
export class SampleDialogComponent {
  dialogRef = inject<DialogRef<void>>(DialogRef);
}
