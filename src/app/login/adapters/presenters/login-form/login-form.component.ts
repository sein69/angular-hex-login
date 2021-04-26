import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../../ports/dto/login-form";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  private submitHandler: EventEmitter<LoginForm> = new EventEmitter<LoginForm>();

  public loginGroup: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.loginGroup = this.builder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginGroup.valid) {
      // handle errors
      return false;
    }
    this.submitHandler.emit(this.loginGroup.getRawValue());
  }
}
