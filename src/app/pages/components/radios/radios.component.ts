import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkRadiosComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-radios",
  templateUrl: "radios.component.html",
  styleUrl: "radios.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkRadiosComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class RadiosComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-radios size="large" [options]="radioOptions" [(ngModel)]="selectedRadioValue" formControlName="radio" (onValueChange)="onRadioValueChange($event)" />`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkRadiosComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkRadiosComponent],
})
  
export class MyComponent {
  public radioOptions: any[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
  ];

  public selectedRadioValue!: number;
}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--radio-background-color: var(--background-color);
--radio-inset-background-color: var(--background-color);
--radio-inner-background-color: var(--primary-color);
--radio-border-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public radioOptions: { value: number; label: string }[] = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
  ];

  public largeRadioOptionValue = 1;
  public mediumRadioOptionValue = 1;
  public smallRadioOptionValue = 1;

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
