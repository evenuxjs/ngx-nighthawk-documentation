import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkRangeSelectComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-range-select",
  templateUrl: "range-select.component.html",
  styleUrl: "range-select.component.scss",
  imports: [LayoutComponent, NighthawkRangeSelectComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class RangeSelectComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-range-select
  [min]="0" 
  [max]="500" 
  [value]="200" 
  size="large" 
  [(ngModel)]="selectedRangeValue" 
  formControlName="range" 
  (onValueChange)="onRangeValueChange($event)"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkRangeSelectComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkRangeSelectComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--range-slider-main-color: var(--primary-color);
--range-slider-value-active-color: var(--background-color);
--range-slider-progress-background: var(--background-color);
--range-slider-thumb-color: var(--primary-color);
--range-slider-ticks-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
