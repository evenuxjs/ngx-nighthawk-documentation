import { Component, inject } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogRef } from "@angular/cdk/dialog";
import { NighthawkButtonDirective, NighthawkLoaderComponent } from "ngx-nighthawk";

@Component({
  selector: "app-donate-dialog",
  templateUrl: "donate-dialog.component.html",
  styleUrls: ["./donate-dialog.component.scss"],
  imports: [ReactiveFormsModule, NighthawkButtonDirective, NighthawkLoaderComponent],
})
export class DonateDialogComponent {
  dialogRef = inject<DialogRef<void>>(DialogRef);

  public redirecting = false;
}
