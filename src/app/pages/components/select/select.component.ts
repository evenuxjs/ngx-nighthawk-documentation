import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkSelectComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-select",
  templateUrl: "select.component.html",
  styleUrl: "select.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkSelectComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class SelectComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-select 
  color="primary" 
  size="small" 
  nameField="name" 
  valueField="id" 
  [options]="basicOptions" 
  [rounded]="true" 
  [border]="true" 
  [hasSearch]="true"
  placeholder="Select an option"
  searchPlaceholder="Search for options"
  [(ngModel)]="selectedOption" 
  formControlName="option
  (onOptionSelect)="onOptionSelect($event)"
  (onSearchValue)="onSearchValue($event)"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkSelectComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkSelectComponent],
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

  public selectedLargeValue1 = "";
  public selectedLargeValue2 = "";
  public selectedLargeValue3 = "";
  public selectedLargeValue4 = "";
  public selectedLargeValue5 = "";

  public selectedMediumValue1 = "";
  public selectedMediumValue2 = "";
  public selectedMediumValue3 = "";
  public selectedMediumValue4 = "";
  public selectedMediumValue5 = "";

  public selectedSmallValue1 = "";
  public selectedSmallValue2 = "";
  public selectedSmallValue3 = "";
  public selectedSmallValue4 = "";
  public selectedSmallValue5 = "";

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
