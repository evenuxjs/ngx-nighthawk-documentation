import { Component, inject } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkHighlightComponent,
  NighthawkTabComponent,
  NighthawkTabsComponent,
  NighthawkLightboxService,
  NighthawkImageLoaderDirective,
} from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-lightbox",
  templateUrl: "lightbox.component.html",
  styleUrl: "lightbox.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
    NighthawkImageLoaderDirective,
  ],
})
export class LightboxComponent {
  private readonly lightboxService = inject(NighthawkLightboxService);

  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<div class="row gx-3 gy-3">
  @for (image of images; let i = $index; track i) {
    <div class="col-6 col-lg-3">
      <img
        [src]="image"
        class="img-fluid"
        (click)="openLightbox(i)"
        alt=""
      />
    </div>
  }
</div>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkLightboxComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkLightboxComponent],
})
  
export class MyComponent {
public images = [
  'https://picsum.photos/id/200/2560/1440',
  'https://picsum.photos/id/201/2560/1440',
  'https://picsum.photos/id/202/2560/1440',
  'https://picsum.photos/id/203/2560/1440',
];

constructor(private readonly lightboxService: NighthawkLightboxService) {}

public openLightbox(index: number): void {
  this.lightboxService.open(this.images, index);
}}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--lightbox-backdrop-background-color: var(--dark-color);
--lightbox-backdrop-navigation-button-background-color: #00000073;
--lightbox-backdrop-navigation-button-color: var(--light-color);
--lightbox-backdrop-button-color: var(--light-color);
--lightbox-backdrop-button-hover-color: var(--light-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public images = [
    "https://picsum.photos/id/200/2560/1440",
    "https://picsum.photos/id/201/2560/1440",
    "https://picsum.photos/id/202/2560/1440",
    "https://picsum.photos/id/203/2560/1440",
  ];

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  public openLightbox(index: number): void {
    this.lightboxService.open(this.images, index);
  }
}
