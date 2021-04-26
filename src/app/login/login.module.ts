import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./adapters/containers/login-page/login-page.component";
import {LoginFormComponent} from "./adapters/presenters/login-form/login-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LoginFacade} from "./ports/login-facade";
import {LoginFacadeService} from "./ports/login-facade.service";



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {provide: LoginFacade, useClass: LoginFacadeService}
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
