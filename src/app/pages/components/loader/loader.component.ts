import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkLoaderComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-loader",
  templateUrl: "loader.component.html",
  styleUrl: "loader.component.scss",
  imports: [LayoutComponent, NighthawkLoaderComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class LoaderComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-loader [size]="60" type="bouncing-ball" />
<nighthawk-loader [size]="60" customLoaderImagePath="./images/fire-flame.gif" />`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkLoaderComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkLoaderComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--loader-background: var(--background-color);
--loader-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
