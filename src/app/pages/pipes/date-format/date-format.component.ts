import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkDateFormatPipe, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-date-format",
  templateUrl: "date-format.component.html",
  styleUrl: "date-format.component.scss",
  imports: [
    CommonModule,
    LayoutComponent,
    NighthawkDateFormatPipe,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class DateFormatComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<!-- For current datetime -->
{{ now | dateFormat : "dd.MM.yyyy - HH:mm:ss" }}
 
<!-- For database datetime (last argument is set to true) -->
{{ now | dateFormat : "dd.MM.yyyy - HH:mm:ss" : true }}`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkDateFormatPipe } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkDateFormatPipe],
})
  
export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";
  public now: Date = new Date();

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
