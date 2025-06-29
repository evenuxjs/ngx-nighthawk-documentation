import { Component, inject } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkButtonDirective,
  NighthawkConfirmationService,
  NighthawkDialogService,
  NighthawkHighlightComponent,
  NighthawkNotificationService,
  NighthawkTabComponent,
  NighthawkTabsComponent,
} from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";
import { take } from "rxjs";
import { SampleDialogComponent } from "../../../components/sample-dialog/sample-dialog.component";

@Component({
  selector: "app-dialog",
  templateUrl: "dialog.component.html",
  styleUrl: "dialog.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkButtonDirective,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class DialogComponent {
  private readonly confirmationService = inject(NighthawkConfirmationService);
  private readonly notificationService = inject(NighthawkNotificationService);
  private readonly dialogService = inject(NighthawkDialogService);

  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<!-- Custom dialog -->
<div class="dialog-wrapper">
  <div class="dialog-content">
    <h5 class="mb-3">Sample dialog</h5>
    <p class="mb-5">This is a sample dialog that can contain whatever necessary.</p>
    <div class="footer">
      <button nighthawkButton type="button" color="primary" [rounded]="true" [border]="true" (click)="dialogRef.close()">
        Close
      </button>
    </div>
  </div>
</div>

<!-- Parent component that opens dialogs -->
<button nighthawkButton type="button" color="primary" size="medium" [rounded]="true" [border]="true" (click)="requestConfirmation()" class="me-2">
  Request confirmation
</button>
<button nighthawkButton type="button" color="primary" size="medium" [rounded]="true" [border]="true" (click)="showNotification()" class="me-2">
  Show notification
</button>
<button nighthawkButton type="button" color="primary" size="medium" [rounded]="true" [border]="true" (click)="openDialog()">
  Open custom dialog
</button>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `// Custom dialog component
import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { NighthawkButtonDirective } from 'ngx-nighthawk';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: 'sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss'],
  imports: [NighthawkButtonDirective],
})
export class SampleDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef<void>
  ) {}
}

// Parent component
import {
  NighthawkButtonDirective,
  NighthawkConfirmationService,
  NighthawkNotificationService,
  NighthawkDialogService,
} from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkButtonDirective],
})
export class MyComponent {
  constructor(
    private readonly confirmationService: NighthawkConfirmationService,
    private readonly notificationService: NighthawkNotificationService,
    private readonly dialogService: NighthawkDialogService
  ) {}

  public requestConfirmation(): void {
    const ref = this.confirmationService.show(
      'Confirmation sample',
      'This is a request for a confirmation, do you agree?',
      'Agree',
      'Close'
    );

    ref.closed.pipe(take(1)).subscribe((agreed) => {
      if (agreed) {
        this.notificationService.show(
          'Confirmation result',
          'You did indeed agree...',
          'Close'
        );
      } else {
        this.notificationService.show(
          'Confirmation result',
          'You did not agree...',
          'Close'
        );
      }
    });
  }

  public showNotification(): void {
    this.notificationService.show(
      'Notification sample',
      'This is a sample notification that you can close',
      'Close'
    );
  }

  public openDialog(): void {
    this.dialogService.open(SampleDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'custom-dialog-class',
      data: {
        testVariable: 42,
      },
    });
  }
}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// Sample dialog
.footer {
  display: flex;
  justify-content: end;
}
`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--dialog-shadow-color: #00000026;
--dialog-background-color: var(--highlight-color);
--dialog-border-color: var(--dark-color);`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  public requestConfirmation(): void {
    const ref = this.confirmationService.show(
      "Confirmation sample",
      "This is a request for a confirmation, do you agree?",
      "Agree",
      "Close",
    );

    ref.closed.pipe(take(1)).subscribe((agreed) => {
      if (agreed) {
        this.notificationService.show("Confirmation result", "You did indeed agree...", "Close");
      } else {
        this.notificationService.show("Confirmation result", "You did not agree...", "Close");
      }
    });
  }

  public showNotification(): void {
    this.notificationService.show("Notification sample", "This is a sample notification that you can close", "Close");
  }

  public openDialog(): void {
    this.dialogService.open(SampleDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
    });
  }
}
