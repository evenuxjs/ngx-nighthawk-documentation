import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent } from "ngx-nighthawk";

@Component({
  selector: "app-variables",
  templateUrl: "variables.component.html",
  styleUrl: "variables.component.scss",
  imports: [LayoutComponent, NighthawkHighlightComponent],
})
export class VariablesComponent {
  public variablesCode = `:root {
  // -------------------- GENERAL -------------------- //
  // General
  --font-family: "Cutive Mono", monospace;
  --font-size: 14px;
  --minimum-page-loading-time: 2000;
  --minimum-route-switch-loading-time: 3000;
  --loader-background: #171821;
  --loader-color: #ffffff;
  --background-color: #171821;
  --text-color: #afafaf;
  --background-image: intial;

  // Breakpoints
  --mobile-max-width: 576px;
  --desktop-max-width: 1320px;
  --container-padding: 20px;

  // Colors
  --primary-color: #fcb859;
  --secondary-color: #8400ff;
  --dark-color: #151921;
  --light-color: #ffffff;

  // -------------------- BUTTONS -------------------- //
  // General
  --button-border-width: 1px;
  --button-border-radius: 8px;
  --lg-button-x-padding: 36px;
  --lg-button-y-padding: 18px;
  --md-button-x-padding: 24px;
  --md-button-y-padding: 16px;
  --sm-button-x-padding: 12px;
  --sm-button-y-padding: 8px;

  // Text
  --transparent-button-text-color: var(--primary-color);
  --primary-button-text-color: #000000;
  --secondary-button-text-color: #ffffff;
  --dark-button-text-color: #ffffff;
  --light-button-text-color: #000000;

  // Hover event
  --transparent-button-background-event-color: transparent;
  --primary-button-background-event-color: #88b6ff;
  --secondary-button-background-event-color: #b76bff;
  --dark-button-background-event-color: #4d4d4d;
  --light-button-background-event-color: #c4c4c4;

  // Border color
  --transparent-button-border-color: var(--primary-color);
  --primary-button-border-color: #002663;
  --secondary-button-border-color: #340064;
  --dark-button-border-color: #525252;
  --light-button-border-color: #c4c4c4;

  // -------------------- FORM CONTROL -------------------- //
  // General
  --form-control-border-width: 1px;
  --form-control-border-radius: 8px;
  --lg-form-control-x-padding: 20px;
  --lg-form-control-y-padding: 18px;
  --md-form-control-x-padding: 16px;
  --md-form-control-y-padding: 14px;
  --sm-form-control-x-padding: 12px;
  --sm-form-control-y-padding: 6px;

  // Text
  --transparent-form-control-text-color: #000000;
  --primary-form-control-text-color: #ffffff;
  --secondary-form-control-text-color: #ffffff;
  --dark-form-control-text-color: #ffffff;
  --light-form-control-text-color: #000000;

  // Placeholders
  --transparent-form-control-placeholder-color: #000000;
  --primary-form-control-placeholder-color: #ffffff;
  --secondary-form-control-placeholder-color: #ffffff;
  --dark-form-control-placeholder-color: #ffffff;
  --light-form-control-placeholder-color: #000000;

  // Background
  --transparent-form-control-background-color: transparent;
  --primary-form-control-background-color: #0062ff;
  --secondary-form-control-background-color: #8400ff;
  --dark-form-control-background-color: #000000;
  --light-form-control-background-color: #ffffff;

  // Hover/ focus event
  --transparent-form-control-background-event-color: transparent;
  --primary-form-control-background-event-color: #88b6ff;
  --secondary-form-control-background-event-color: #b76bff;
  --dark-form-control-background-event-color: #4d4d4d;
  --light-form-control-background-event-color: #c4c4c4;

  // Border color
  --transparent-form-control-border-color: #000000;
  --primary-form-control-border-color: #000000;
  --secondary-form-control-border-color: #000000;
  --dark-form-control-border-color: #000000;
  --light-form-control-border-color: #000000;

  // ------------------- CHECKBOX -------------------- //
  --checkbox-background-color: #cccccc;
  --checkbox-checked-background-color: #0062ff;
  --checkbox-checkmark-color: #ffffff;
  --checkbox-border-color: #0062ff;

  // --------------------- RADIOS -------------------- //
  --radio-background-color: #cccccc;
  --radio-inset-background-color: #cccccc;
  --radio-inner-background-color: #0062ff;
  --radio-border-color: #0062ff;

  // -------------------- SELECT- -------------------- //
  --dropdown-options-background-color: #ffffff;
  --dropdown-options-text-color: #000000;
  --dropdown-options-hover-background-color: #cccccc;
  --dropdown-options-hover-text-color: #000000;
  --dropdown-options-border-color: #cccccc;
  --dropdown-down-dir-icon-color: #ffffff;

  // -------------------- DROPDOWN ------------------ //
  --dropdown-background-color: #ffffff;
  --dropdown-border-color: #cccccc;
  --dropdown-border-width: 1px;
  --dropdown-border-radius: 14px;

  // -------------------- DIALOG -------------------- //
  --dialog-shadow-color: #00000026;
  --dialog-background-color: #ffffff;
  --dialog-border-color: #000000;

  // ----------------- RANGE SLIDER ----------------- //
  --range-slider-main-color: #0062ff;
  --range-slider-value-active-color: #ffffff;
  --range-slider-progress-background: #cccccc;
  --range-slider-thumb-color: #ffffff;
  --range-slider-ticks-color: #cccccc;

  // ----------------- RANGE PICKER ----------------- //
  --range-picker-main-color: #0062ff;
  --range-picker-value-active-color: #ffffff;
  --range-picker-progress-background: #cccccc;
  --range-picker-thumb-color: #ffffff;
  --range-picker-ticks-color: #cccccc;

  // ------------------- CALENDAR ------------------- //
  --calendar-header-background-color: #0062ff;
  --calendar-header-text-color: #ffffff;
  --calendar-day-item-border-color: #cccccc;
  --calendar-day-item-background-color: #f1f1f1;
  --calendary-day-item-hover-background-color: #0062ff;
  --calendar-day-item-number-text-color: #000000;
  --calendar-day-item-hover-number-text-color: #ffffff;

  // -------------------- SWIPER -------------------- //
  --swiper-navigation-sides-offset: -36px;
  --swiper-navgiation-sides-color: #000000;
  --swiper-navigation-sides-font-size: 21px;

  // ------------------- HIGHLIGHT ------------------ //
  --code-highlight-background-color: #171821;
  --code-highlight-border-radius: 8px;
  --code-highlight-text-color: #ffffff;

  // ------------------ SELECTED TEXT --------------- //
  --selected-text-color: #000000;
  --selected-text-background-color: var(--primary-color);
}
`;
}
