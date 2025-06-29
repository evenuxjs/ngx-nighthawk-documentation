import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkButtonDirective } from "ngx-nighthawk";

@Component({
  selector: "app-themes",
  templateUrl: "themes.component.html",
  styleUrl: "themes.component.scss",
  imports: [LayoutComponent, NighthawkButtonDirective],
})
export class ThemesComponent {}
