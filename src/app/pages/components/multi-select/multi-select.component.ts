import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkMultiSelectComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-multi-select",
  templateUrl: "multi-select.component.html",
  styleUrl: "multi-select.component.scss",
  imports: [
    FormsModule,
    CommonModule,
    LayoutComponent,
    NighthawkMultiSelectComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class MultiSelectComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-multi-select 
  color="primary" 
  [border]="true" 
  [rounded]="true" 
  [options]="basicOptions"
  nameField="name" 
  valueField="id" 
  placeholder="Select options" 
  [(ngModel)]="selectedOptions" 
  formControlName="selection"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkCalendarComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkCalendarComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--dropdown-options-background-color: var(--background-color);
--dropdown-options-text-color: var(--text-color);
--dropdown-options-hover-background-color: var(--highlight-color);
--dropdown-options-hover-text-color: var(--light-color);
--dropdown-options-border-color: transparent;
--dropdown-down-dir-icon-color: var(--light-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public basicOptions: { id: number; name: string }[] = [
    { id: 1, name: "1st option" },
    { id: 2, name: "2nd option" },
    { id: 3, name: "3rd option" },
    { id: 4, name: "4th option" },
    { id: 5, name: "5th option" },
    { id: 6, name: "6th option" },
    { id: 7, name: "7th option" },
    { id: 8, name: "8th option" },
    { id: 9, name: "9th option" },
    { id: 10, name: "10th option" },
    { id: 11, name: "11th option" },
    { id: 12, name: "12th option" },
    { id: 13, name: "13th option" },
    { id: 14, name: "14th option" },
    { id: 15, name: "15th option" },
    { id: 16, name: "16th option" },
    { id: 17, name: "17th option" },
    { id: 18, name: "18th option" },
    { id: 19, name: "19th option" },
    { id: 20, name: "20th option" },
  ];

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
