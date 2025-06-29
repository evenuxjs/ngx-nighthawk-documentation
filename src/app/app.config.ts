import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from "@angular/router";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideCustomHighlightOptions } from "ngx-nighthawk";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: "top",
  anchorScrolling: "enabled",
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideCustomHighlightOptions(),
    importProvidersFrom([BrowserAnimationsModule]),
  ],
};
