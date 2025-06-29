import { Component } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import { NighthawkHighlightComponent, NighthawkTabComponent, NighthawkTabsComponent, NighthawkTextEditorComponent } from "ngx-nighthawk";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-text-editor",
  templateUrl: "text-editor.component.html",
  styleUrl: "text-editor.component.scss",
  imports: [
    FormsModule,
    LayoutComponent,
    NighthawkTextEditorComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
    NighthawkHighlightComponent,
  ],
})
export class TextEditorComponent {
  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<nighthawk-text-editor [(ngModel)]="editorContent" formControlName="editorContent" />`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkTextEditorComponent } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkTextEditorComponent],
})
  
export class MyComponent {}`;

  // --------------------------------------------- VARIABLES --------------------------------------------------

  public scssVariables = `--text-editor-min-height: 400px;
--text-editor-border-color: #5b5b5b;
--text-editor-toolbar-buttons-color: var(--text-color);
--text-editor-toolbar-active-color: var(--primary-color);`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // ------------------------------------------- EDITOR CONFIG ------------------------------------------------

  public editorConfig = `public config: any = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public activeTab = "html";

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
