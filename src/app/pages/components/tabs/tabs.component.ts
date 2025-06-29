import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkTabsComponent, NighthawkHighlightComponent, NighthawkTabComponent } from "ngx-nighthawk";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.component.html",
  styleUrl: "tabs.component.scss",
  imports: [LayoutComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class TabsComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-tabs tabsButtonSize="small">
  <nighthawk-tab tabLabel="Tab 1">Content for Tab 1</nighthawk-tab>
  <nighthawk-tab tabLabel="Tab 2">Content for Tab 2</nighthawk-tab>
  <nighthawk-tab tabLabel="Tab 3">Content for Tab 3</nighthawk-tab>
</nighthawk-tabs>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkTabsComponent, NighthawkTabComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkTabsComponent, NighthawkTabComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--tabs-header-margin: 0 0 14px 0;
--tabs-content-background-color: var(--background-color);
--tabs-content-padding: 12px;
--tabs-content-border-radius: 8px;`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
