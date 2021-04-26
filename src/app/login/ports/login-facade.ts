import {UserView} from "./dto/user-view";
import {Observable} from "rxjs";
import {LoginForm} from "./dto/login-form";

export abstract class LoginFacade {
  public abstract loginUser(form: LoginForm): Observable<UserView>;
}
