import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkSwiperComponent, NighthawkHighlightComponent, NighthawkTabsComponent, NighthawkTabComponent } from "ngx-nighthawk";

@Component({
  selector: "app-swiper",
  templateUrl: "swiper.component.html",
  styleUrl: "swiper.component.scss",
  imports: [LayoutComponent, NighthawkSwiperComponent, NighthawkTabsComponent, NighthawkTabComponent, NighthawkHighlightComponent],
})
export class SwiperComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-swiper class="swiper-single" [config]="singleSlideSwiperConfig" (onSlideChange)="onSlideChange($event)">
  @for (slide of [].constructor(5); let i = $index; track i) {
  <div class="swiper-slide single-slide">
      <h5>Slide {{ i + 1 }}</h5>
  </div>
  }
</nighthawk-swiper>

<nighthawk-swiper class="swiper-multi" [config]="multiSlideSwiperConfig" (onSlideChange)="onSlideChange($event)">
  @for (slide of [].constructor(12); let i = $index; track i) {
  <div class="swiper-slide multi-slide">
      <h5>Slide {{ i + 1 }}</h5>
  </div>
  }
</nighthawk-swiper>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkSwiperComponent } from 'ngx-nighthawk';
  
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkButtonDirective],
})

export class MyComponent {
  public singleSlideSwiperConfig: any = {
    slidesPerView: 1,
    navigation: {
      enabled: true,
    },
    pagination: {
      enabled: true,
    },
  };

  public multiSlideSwiperConfig: any = {
    slidesPerView: 1,
    navigation: {
      enabled: true,
    },
    pagination: {
      enabled: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      }
    }
  };
}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `@import "ngx-nighthawk/styles/mixins";

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  border-radius: 8px;

  &.single-slide {
    height: 400px;
  }

  &.multi-slide {
    height: 160px;
  }

  @include media-breakpoint-down(lg) {
    background-color: var(--highlight-color);
  }
}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--swiper-navigation-sides-offset: 12px;
--swiper-navgiation-sides-color: var(--light-color);
--swiper-navigation-sides-font-size: 21px;`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public singleSlideSwiperConfig: unknown = {
    slidesPerView: 1,
    navigation: {
      enabled: true,
    },
    pagination: {
      enabled: true,
    },
  };

  public multiSlideSwiperConfig: unknown = {
    slidesPerView: 1,
    navigation: {
      enabled: true,
    },
    pagination: {
      enabled: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  };

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
