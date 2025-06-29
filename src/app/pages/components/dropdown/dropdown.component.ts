import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkButtonDirective,
  NighthawkDropdownComponent,
  NighthawkDropdownTriggerForDirective,
  NighthawkHighlightComponent,
  NighthawkTabComponent,
  NighthawkTabsComponent,
} from "ngx-nighthawk";

@Component({
  selector: "app-dropdown",
  templateUrl: "dropdown.component.html",
  styleUrl: "dropdown.component.scss",
  imports: [
    LayoutComponent,
    NighthawkButtonDirective,
    NighthawkDropdownTriggerForDirective,
    NighthawkDropdownComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class DropdownComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<button nighthawk-button nighthawk-dropdown-trigger color="primary" size="large" [rounded]="true"
  [border]="true" [dropdownTrigger]="dropdownRef" [direction]="'end'" [dropdownOffset]="0"
  [dropdownHideDelay]="0" [dropdownOnHover]="false" [dropdownCloseOnClickInside]="false"
  [dropdownCloseOnRouteChange]="true" dropdownPanelClass="custom-dropdown" class="me-2" (closed)="onDropdownClosed()"
>
  Click to open
</button>

<button nighthawk-button nighthawk-dropdown-trigger color="primary" size="large" [rounded]="true"
  [border]="true" [dropdownTrigger]="dropdownRef" [direction]="'end'" [dropdownOffset]="0"
  [dropdownHideDelay]="0" [dropdownOnHover]="true" [dropdownCloseOnClickInside]="false"
  [dropdownCloseOnRouteChange]="true" dropdownPanelClass="custom-dropdown" (closed)="onDropdownClosed()"
>
  Hover to open
</button>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import {
  NighthawkButtonDirective,
  NighthawkDropdownComponent,
  NighthawkDropdownTriggerForDirective,
} from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [
    NighthawkButtonDirective,
    NighthawkDropdownTriggerForDirective,
    NighthawkDropdownComponent,
  ],
})

export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--dropdown-background-color: var(--highlight-color);
--dropdown-border-color: var(--dark-color);
--dropdown-border-width: 1px;
--dropdown-border-radius: 14px;`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
