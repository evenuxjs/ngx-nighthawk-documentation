import { Component, Input, OnInit, PLATFORM_ID, inject } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { NighthawkButtonDirective, NighthawkDialogService, NighthawkSelectComponent } from "ngx-nighthawk";
import { filter } from "rxjs";
import { ThemeService } from "../../services/theme.service";
import { FormsModule } from "@angular/forms";
import { DonateDialogComponent } from "../donate-dialog/donate-dialog.component";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-layout",
  templateUrl: "layout.component.html",
  styleUrl: "layout.component.scss",
  imports: [RouterModule, FormsModule, NighthawkButtonDirective, NighthawkSelectComponent],
})
export class LayoutComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);
  private readonly dialogService = inject(NighthawkDialogService);

  @Input() heading!: string;

  public isLoggedIn = false;

  public isMobileMenuVisible = false;
  public isUserMenuVisible = false;

  public selectedTheme = "theme-silent-night";

  private isBrowser = false;

  public themes: { name: string; value: string }[] = [
    { name: "Silent Night", value: "theme-silent-night" },
    { name: "Ice Cold", value: "theme-ice-cold" },
  ];

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public ngOnInit(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.isMobileMenuVisible = false;

      if (this.isBrowser) {
        document.body.classList.remove("no-scroll");
      }
    });

    this.selectedTheme = this.themeService.getTheme();
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;

    if (this.isBrowser) {
      if (this.isMobileMenuVisible) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  }

  public toggleUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;

    if (this.isBrowser) {
      if (this.isUserMenuVisible) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  }

  public closeMenus(): void {
    this.isUserMenuVisible = false;
    this.isMobileMenuVisible = false;

    if (this.isBrowser) {
      document.body.classList.remove("no-scroll");
    }
  }

  public onSelectTheme(value: string): void {
    this.themeService.setTheme(value);
  }

  public openDonateDialog(): void {
    this.dialogService.open(DonateDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      panelClass: "purchase-dialog",
      autoFocus: false,
    });
  }
}
