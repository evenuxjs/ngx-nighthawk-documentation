import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkDateSelectorComponent, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-date-selector",
  templateUrl: "date-selector.component.html",
  styleUrl: "date-selector.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkDateSelectorComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class DateSelectorComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-date-selector 
  color="primary" 
  [rounded]="true" 
  [border]="true" 
  [fullWidth]="true"
  [(ngModel)]="selectedDate"
  formControlName="date"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkDateSelectorComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkDateSelectorComponent],
})

export class MyComponent {}
`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
