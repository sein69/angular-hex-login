import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../entities/user";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../../endpoints";
import {LoginResponse} from "../../ports/dto/login-response";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export abstract class AuthService {

  constructor(private http: HttpClient) {
  }

  public loginUser(email: string, password: string): Observable<User> {
    return this.http.get<LoginResponse>(Endpoints.LOGIN).pipe(
      map(data => new User(data.attributes.email),
        take(1)
      )
    )
  }
}
