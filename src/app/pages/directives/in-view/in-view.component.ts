import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkInViewDirective, NighthawkHighlightComponent, NighthawkTabsComponent, NighthawkTabComponent } from "ngx-nighthawk";

@Component({
  selector: "app-in-view",
  templateUrl: "in-view.component.html",
  styleUrl: "in-view.component.scss",
  imports: [LayoutComponent, NighthawkInViewDirective, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class InViewComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<div class="visibility-test-container" nighthawk-in-view (inView)="setInViewState($event)">
  <p class="mb-0">
      Current status: {{ isDivInView ? "VISIBLE" : "NOT IN VIEW" }}.
  </p>
</div>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkInViewDirective } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkInViewDirective],
})
  
export class MyComponent {}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public isDivInView = false;
  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  public setInViewState(visible: boolean): void {
    this.isDivInView = visible;
  }
}
