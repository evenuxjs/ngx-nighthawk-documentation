import { AfterViewInit, Component, OnInit, PLATFORM_ID, ViewContainerRef, inject } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { NighthawkBootstrapService } from "ngx-nighthawk";
import { filter } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
declare const gtag: Function;

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private readonly nighthawk = inject(NighthawkBootstrapService);
  private readonly vcr = inject(ViewContainerRef);
  private readonly router = inject(Router);

  private isBrowser = false;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public ngOnInit(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (this.isBrowser) {
        gtag("event", "page_view", {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }

  public async ngAfterViewInit(): Promise<void> {
    this.nighthawk.setVcrInstance(this.vcr);
    await this.nighthawk.loadApplication({
      timezone: "guess",
      databaseTimezone: "UTC",
      pageLoaderType: "tube-spinner",
      pageLoaderSize: 54,
      pageLoaderCustomImagePath: false,
      pageLoaderEnabled: true,
      routeLoaderEnabled: false,
      minimumLoaderTime: 1000,
      manualLoader: false,
      fonts: [],
    });
  }
}
