import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, Renderer2, RendererFactory2, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  private renderer: Renderer2;
  private currentTheme = "theme-silent-night";

  private isBrowser = false;

  constructor() {
    const rendererFactory = inject(RendererFactory2);

    this.isBrowser = isPlatformBrowser(this.platformId);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public getTheme(): string {
    return this.currentTheme;
  }

  public setTheme(themeName: string): void {
    if (this.isBrowser) {
      if (this.currentTheme) {
        this.renderer.removeClass(document.body, this.currentTheme);
      }

      this.renderer.addClass(document.body, themeName);

      this.currentTheme = themeName;
    }
  }
}
