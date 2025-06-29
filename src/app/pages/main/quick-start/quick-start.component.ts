import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { FormsModule } from "@angular/forms";
import { NighthawkHighlightComponent } from "ngx-nighthawk";

@Component({
  selector: "app-quick-start",
  templateUrl: "quick-start.component.html",
  styleUrl: "quick-start.component.scss",
  imports: [FormsModule, LayoutComponent, NighthawkHighlightComponent],
})
export class QuickStartComponent {
  public clone = `git clone https://github.com/evenuxjs/nighthawk-starter`;
  public install = `cd nighthawk-starter\nnpm install\nnpm run start`;

  public npmInstall = `npm install ngx-nighthawk`;
  public importDefaultStyles = `@import "ngx-nighthawk/styles";`;
  public copyNighthawkAssetsScript = `npx copyfiles -u 4 './node_modules/ngx-nighthawk/src/assets/**/*' ./public/"`;

  public wrapRouterOutlet = `<main>\n  <router-outlet />\n</main>`;
  public initializeApplication = `export class AppComponent implements AfterViewInit {
  constructor(
    private readonly nighthawk: NighthawkBootstrapService,
    private readonly vcr: ViewContainerRef,
  ) {}

  public async ngAfterViewInit(): Promise<void> {
    this.nighthawk.setVcrInstance(this.vcr);
    await this.nighthawk.loadApplication({
      timezone: 'guess',
      databaseTimezone: 'UTC',
      pageLoaderType: 'tube-spinner',
      pageLoaderSize: 54,
      pageLoaderCustomImagePath: false,
      pageLoaderEnabled: true,
      routeLoaderEnabled: false,
      minimumLoaderTime: 1000,
      manualLoader: false,
      fonts: [],
    });
  }
}`;
}
