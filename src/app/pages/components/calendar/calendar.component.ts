import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkCalendarComponent, NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent } from "ngx-nighthawk";

@Component({
  selector: "app-calendar",
  templateUrl: "calendar.component.html",
  styleUrl: "calendar.component.scss",
  imports: [LayoutComponent, NighthawkCalendarComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class CalendarComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-calendar size="small" [month]="0" [year]="2038" [startDayOfWeek]="1" (selectedDay)="onSelectedDay($event)" />`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkCalendarComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkCalendarComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--calendar-header-background-color: var(--primary-color);
--calendar-header-text-color: var(--dark-color);
--calendar-day-item-border-color: var(--dark-color);
--calendar-day-item-background-color: var(--background-color);
--calendary-day-item-hover-background-color: var(--highlight-color);
--calendar-day-item-number-text-color: var(--primary-color);
--calendar-day-item-hover-number-text-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
