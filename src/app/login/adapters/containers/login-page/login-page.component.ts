import {Component, OnInit} from '@angular/core';
import {LoginForm} from "../../../ports/dto/login-form";
import {LoginFacade} from "../../../ports/login-facade";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private facade: LoginFacade) {
  }

  ngOnInit(): void {
  }

  public submitLogin(form: LoginForm) {
    this.facade.loginUser(form);
  }

}
