import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkButtonDirective,
  NighthawkHighlightComponent,
  NighthawkTabComponent,
  NighthawkTabsComponent,
  NighthawkTooltipDirective,
} from "ngx-nighthawk";

@Component({
  selector: "app-tooltip",
  templateUrl: "tooltip.component.html",
  styleUrl: "tooltip.component.scss",
  imports: [
    LayoutComponent,
    NighthawkButtonDirective,
    NighthawkTooltipDirective,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class TooltipComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<p nighthawkTooltip="This is an example of a tooltip...">Tooltip example text (hover)</p>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkTooltipDirective } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkTooltipDirective],
})
  
export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--tooltip-background-color: var(--light-color);
--tooltip-text-color: var(--dark-color);
--tooltip-border-radius: 4px;
--tooltip-padding: 8px 16px;`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
