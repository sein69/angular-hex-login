import {AuthService} from "../domain/services/auth.service";
import {LoginForm} from "./dto/login-form";
import {UserView} from "./dto/user-view";
import {Observable} from "rxjs";
import {LoginFacade} from "./login-facade";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginFacadeService implements LoginFacade {

  constructor(private authService: AuthService) {
  }

  public loginUser(form: LoginForm): Observable<UserView> {
    return this.authService.loginUser(form.email, form.password)
  }
}
