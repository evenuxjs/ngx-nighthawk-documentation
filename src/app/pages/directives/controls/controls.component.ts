import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkFormControlDirective, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-controls",
  templateUrl: "controls.component.html",
  styleUrl: "controls.component.scss",
  imports: [LayoutComponent, NighthawkFormControlDirective, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class ControlsComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<input 
  nighthawk-form-control 
  type="text" 
  color="primary" 
  size="large" 
  [rounded]="true" 
  [border]="true"
  placeholder="Input"
  [(ngModel)]="inputValue"
  formControlName="inputControl"
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkFormControlDirective } from 'ngx-nighthawk';
	
@Component({
	selector: 'my-component',
	templateUrl: 'my-component.component.html',
	styleUrl: 'my-component.component.scss',
	imports: [NighthawkFormControlDirective],
})
  
export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `// General
--form-control-border-width: 1px;
--form-control-border-radius: 8px;
--lg-form-control-x-padding: 20px;
--lg-form-control-y-padding: 18px;
--md-form-control-x-padding: 16px;
--md-form-control-y-padding: 14px;
--sm-form-control-x-padding: 12px;
--sm-form-control-y-padding: 6px;

// Text
--transparent-form-control-text-color: var(--light-color);
--primary-form-control-text-color: var(--dark-color);
--secondary-form-control-text-color: var(--dark-color);
--dark-form-control-text-color: var(--light-color);
--light-form-control-text-color: var(--dark-color);

// Placeholders
--transparent-form-control-placeholder-color: var(--light-color);
--primary-form-control-placeholder-color: var(--dark-color);
--secondary-form-control-placeholder-color: var(--dark-color);
--dark-form-control-placeholder-color: var(--light-color);
--light-form-control-placeholder-color: var(--dark-color);

// Background
--transparent-form-control-background-color: transparent;
--primary-form-control-background-color: var(--primary-color);
--secondary-form-control-background-color: var(--secondary-color);
--dark-form-control-background-color: var(--dark-color);
--light-form-control-background-color: var(--light-color);

// Hover / focus event
--transparent-form-control-background-event-color: transparent;
--primary-form-control-background-event-color: var(--primary-color);
--secondary-form-control-background-event-color: var(--secondary-color);
--dark-form-control-background-event-color: var(--dark-color);
--light-form-control-background-event-color: var(--light-color);

// Border color
--transparent-form-control-border-color: var(--dark-color);
--primary-form-control-border-color: var(--dark-color);
--secondary-form-control-border-color: var(--dark-color);
--dark-form-control-border-color: var(--dark-color);
--light-form-control-border-color: var(--dark-color);`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
