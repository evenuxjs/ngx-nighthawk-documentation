import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkButtonDirective,
  NighthawkHighlightComponent,
  NighthawkImageLoaderDirective,
  NighthawkTabComponent,
  NighthawkTabsComponent,
} from "ngx-nighthawk";

@Component({
  selector: "app-image-loader",
  templateUrl: "image-loader.component.html",
  styleUrl: "image-loader.component.scss",
  imports: [
    LayoutComponent,
    NighthawkImageLoaderDirective,
    NighthawkButtonDirective,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class ImageLoaderComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<img
  nighthawkImageLoader
  imageSrc="https://picsum.photos/id/200/2560/1440"
  [width]="2560"
  [height]="1440"
  alt=""
/>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkImageLoaderDirective } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkImageLoaderDirective],
})
  
export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `// No custom variables specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public displayImage = false;

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
