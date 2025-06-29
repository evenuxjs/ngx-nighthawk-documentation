import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkCheckboxComponent, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-checkbox",
  templateUrl: "checkbox.component.html",
  styleUrl: "checkbox.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkCheckboxComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class CheckboxComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-checkbox type="default" size="medium" [enabled]="true" [(ngModel)]="checkboxSelected" formControlName="checkbox" (onStateChange)="onCheckboxStateChange($event)">
  Default checkbox
</nighthawk-checkbox>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkCheckboxComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkCheckboxComponent],
})

export class MyComponent {}
`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--checkbox-background-color: var(--background-color);
--checkbox-checked-background-color: var(--primary-color);
--checkbox-checkmark-color: var(--dark-color);
--checkbox-border-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
