import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkDateFormatPipe,
  NighthawkHighlightComponent,
  NighthawkTabComponent,
  NighthawkTableComponent,
  NighthawkTabsComponent,
} from "ngx-nighthawk";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-table",
  templateUrl: "table.component.html",
  styleUrl: "table.component.scss",
  imports: [
    LayoutComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkTableComponent,
    NighthawkHighlightComponent,
    NighthawkDateFormatPipe,
  ],
})
export class TableComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-table
  [config]="tableConfig"
  [data]="tableData"
  [fetchUrl]="tableDataFetchUrl"
  (onTableChange)="this.tableConfig = $event"
>
  <div>
    <ng-template #header> ID </ng-template>
    <ng-template #header> Username </ng-template>
    <ng-template #header> Name </ng-template>
    <ng-template #header> Email </ng-template>
    <ng-template #header> Date of birth </ng-template>
    <ng-template #header> Created at </ng-template>
  </div>

  <div>
    <ng-template #cell let-row="row">
      {{ row.id }}
    </ng-template>
    <ng-template #cell let-row="row">
      <div class="text-right text-lg-left">
        <img
          [src]="row.avatar"
          alt="{{ row.name }}"
          style="max-width: 32px; border-radius: 8px; margin-right: 8px"
        />
        {{ row.username }}
      </div>
    </ng-template>
    <ng-template #cell let-row="row">
      {{ row.name }}
    </ng-template>
    <ng-template #cell let-row="row">
      {{ row.email }}
    </ng-template>
    <ng-template #cell let-row="row">
      {{ row.date_of_birth | dateFormat: 'DD.MM.YYYY' : true }}
    </ng-template>
    <ng-template #cell let-row="row">
      {{ row.created_at | dateFormat: 'DD.MM.YYYY - HH:mm:ss' : true }}
    </ng-template>
  </div>
</nighthawk-table>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `public tableConfig: {
  fields: {
    name: string;
    sortEnabled: boolean;
    searchEnabled: boolean;
    width?: number | string | 'auto';
  }[];
  currentSortField: string;
  currentSortDirection: 'asc' | 'desc' | '';
  searchQueryParams: unknown;
  page: number;
  perPage: number;
} = {
  fields: [
    { name: 'id', sortEnabled: true, searchEnabled: true },
    {
      name: 'username',
      sortEnabled: true,
      searchEnabled: true,
    },
    { name: 'name', sortEnabled: true, searchEnabled: true },
    { name: 'email', sortEnabled: true, searchEnabled: true },
    { name: 'date_of_birth', sortEnabled: true, searchEnabled: false },
    { name: 'created_at', sortEnabled: true, searchEnabled: false },
  ],
  currentSortField: '',
  currentSortDirection: '',
  searchQueryParams: {},
  page: 1,
  perPage: 10,
};

public tableData = [];

public tableDataFetchUrl = environment.apiUrl + '/demo/users';`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--table-header-color: var(--primary-color);
--table-search-text-color: var(--primary-color);
--table-clear-search-button-color: var(--primary-color);
--table-background-color: var(--background-color);
--table-border-stripes: 1px solid var(--highlight-color);
--table-border: none;
--table-border-radius: 8px;
--table-cell-padding: 14px;

--table-mobile-filters-header-background-color: var(--highlight-color);
--table-mobile-filters-header-border: none;
--table-mobile-filters-header-padding: 14px;
--table-mobile-filters-header-margin: 0 0 14px 0;
--table-mobile-filters-header-border-radius: 8px;

--table-mobile-filters-body-background-color: var(--highlight-color);
--table-mobile-filters-body-border: none;
--table-mobile-filters-body-padding: 14px;
--table-mobile-filters-body-margin: 0 0 14px 0;
--table-mobile-filters-body-border-radius: 8px;

--table-mobile-row-background-color: var(--highlight-color);
--table-mobile-row-border: none;
--table-mobile-row-margin: 0 0 14px 0;
--table-mobile-row-border-radius: 8px;

--table-footer-background-color: var(--background-color);
--table-footer-border: none;
--table-footer-margin: 0 0 14px 0;
--table-footer-padding: 14px;
--table-footer-border-radius: 8px;`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public tableConfig: {
    fields: {
      name: string;
      sortEnabled: boolean;
      searchEnabled: boolean;
      searchType: string;
      width?: number | string | "auto";
    }[];
    currentSortField: string;
    currentSortDirection: "asc" | "desc" | "";
    searchQueryParams: unknown;
    page: number;
    perPage: number;
  } = {
    fields: [
      {
        name: "id",
        sortEnabled: true,
        searchEnabled: true,
        searchType: "number",
      },
      {
        name: "username",
        sortEnabled: true,
        searchType: "text",
        searchEnabled: true,
      },
      {
        name: "name",
        sortEnabled: true,
        searchEnabled: true,
        searchType: "text",
      },
      {
        name: "email",
        sortEnabled: true,
        searchEnabled: true,
        searchType: "text",
      },
      {
        name: "date_of_birth",
        sortEnabled: true,
        searchEnabled: true,
        searchType: "date",
      },
      {
        name: "created_at",
        sortEnabled: true,
        searchEnabled: true,
        searchType: "date",
      },
    ],
    currentSortField: "",
    currentSortDirection: "",
    searchQueryParams: {},
    page: 1,
    perPage: 10,
  };

  public tableData = [];

  public tableDataFetchUrl = environment.apiUrl + "/demo/users";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
