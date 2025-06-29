import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkButtonDirective, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-buttons",
  templateUrl: "buttons.component.html",
  styleUrl: "buttons.component.scss",
  imports: [LayoutComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkButtonDirective, NighthawkHighlightComponent],
})
export class ButtonsComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<button nighthawk-button color="transparent" size="medium" [border]="true"  [rounded]="true" [disabled]="false">
    Button
</button>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkButtonDirective } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkButtonDirective],
})

export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `// General
--button-border-width: 1px;
--button-border-radius: 8px;
--lg-button-x-padding: 36px;
--lg-button-y-padding: 18px;
--md-button-x-padding: 24px;
--md-button-y-padding: 16px;
--sm-button-x-padding: 12px;
--sm-button-y-padding: 8px;

// Text
--transparent-button-text-color: var(--primary-color);
--primary-button-text-color: var(--dark-color);
--secondary-button-text-color: var(--dark-color);
--dark-button-text-color: var(--light-color);
--light-button-text-color: var(--dark-color);

// Hover event
--transparent-button-background-event-color: transparent;
--primary-button-background-event-color: #ffb691;
--secondary-button-background-event-color: #ffad83;
--dark-button-background-event-color: #1c1c1c;
--light-button-background-event-color: #ffbfbf;

// Border color
--transparent-button-border-color: var(--primary-color);
--primary-button-border-color: var(--dark-color);
--secondary-button-border-color: var(--dark-color);
--dark-button-border-color: var(--dark-color);
--light-button-border-color: var(--light-color);`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
