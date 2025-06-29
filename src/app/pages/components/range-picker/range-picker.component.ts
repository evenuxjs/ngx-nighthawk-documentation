import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkRangePickerComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-range-picker",
  templateUrl: "range-picker.component.html",
  styleUrl: "range-picker.component.scss",
  imports: [LayoutComponent, NighthawkRangePickerComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class RangePickerComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-range-picker 
  [min]="0"
  [max]="500"
  [valueA]="100"
  [valueB]="300"
  size="large"
  [(ngModel)]="selectedRangeValues"
  formControlName="range"
  (onValueChange)="onRangeValuePicked($event)"
  (onMouseClick)="onRangeMouseDown($event)"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkRangePickerComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkRangePickerComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--range-picker-main-color: var(--primary-color);
--range-picker-value-active-color: var(--background-color);
--range-picker-progress-background: var(--background-color);
--range-picker-thumb-color: var(--primary-color);
--range-picker-ticks-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
