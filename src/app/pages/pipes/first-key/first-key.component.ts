import { Component, inject } from "@angular/core";
import { LayoutComponent } from "../../../components/layout/layout.component";
import {
  NighthawkFirstKeyPipe,
  NighthawkFormControlDirective,
  NighthawkHighlightComponent,
  NighthawkTabComponent,
  NighthawkTabsComponent,
  NighthawkValidators,
} from "ngx-nighthawk";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-first-key",
  templateUrl: "first-key.component.html",
  styleUrl: "first-key.component.scss",
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutComponent,
    NighthawkFirstKeyPipe,
    NighthawkFormControlDirective,
    NighthawkHighlightComponent,
    NighthawkTabsComponent,
    NighthawkTabComponent,
  ],
})
export class FirstKeyComponent {
  private readonly fb = inject(FormBuilder);

  // --------------------------------------------- HTML CODE --------------------------------------------------

  public htmlCode = `<form [formGroup]="form">
  <input 
    nighthawk-form-control 
    type="email"  
    color="transparent" 
    [border]="true"
    [rounded]="true" 
    class="mb-2" 
    placeholder="Enter email address"
    formControlName="email"
  />

  <div class="text-danger">
    <p *ngIf="(form.controls.email.errors | firstKey) === 'minlength'">Email address too short</p>
    <p *ngIf="(form.controls.email.errors | firstKey) === 'maxlength'">Email address too long</p>
    <p *ngIf="(form.controls.email.errors | firstKey) === 'email'">Invalid email format</p>
  </div>
</form>`;

  // ------------------------------------------ TYPESCRIPT CODE -----------------------------------------------

  public tsCode = `import { NighthawkFirstKeyPipe, NighthawkValidators } from 'ngx-nighthawk';

@Component({
  selector: 'my-component',
  templateUrl: 'my-component.component.html',
  styleUrl: 'my-component.component.scss',
  imports: [NighthawkFirstKeyPipe],
})
  
export class MyComponent {
  public form = this.fb.group({
    email: ['', [Validators.minLength(6), Validators.maxLength(16), NighthawkValidators.email]]
  });

  constructor(private readonly fb: FormBuilder) {}
}`;

  // --------------------------------------------- SCSS CODE --------------------------------------------------

  public scssCode = `// No custom styles specified...`;

  // --------------------------------------------- OTHER CODE -------------------------------------------------

  public form: FormGroup;

  public activeTab = "html";

  constructor() {
    this.form = this.fb.group({
      email: ["", [Validators.minLength(6), Validators.maxLength(32), NighthawkValidators.email]],
    });
  }

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
