import { Component } from "@angular/core";
import {
  NighthawkHighlightComponent,
  NighthawkQuantitySelectorComponent,
  NighthawkTabComponent,
  NighthawkTabsComponent,
} from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "../../../components/layout/layout.component";

@Component({
  selector: "app-quantity-selector",
  templateUrl: "quantity-selector.component.html",
  styleUrl: "quantity-selector.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkQuantitySelectorComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class QuantitySelectorComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-quantity-selector [(ngModel)]="quantity" size="large" />`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkQuantitySelectorComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkQuantitySelectorComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--quantity-selector-button-background-color: var(--primary-color);
--quantity-selector-input-background-color: var(--background-color);
--quantity-selector-border-color: var(--primary-color);
--quantity-selector-button-text-color: var(--dark-color);
--quantity-selector-input-text-color: var(--light-color);
--quantity-selector-border-radius: 8px;`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public quantity = 1;

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  public test(): void {
    console.log(this.quantity);
  }
}
