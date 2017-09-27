import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login/login.service';
import 'rxjs/add/operator/map';

export class User {

  constructor(
    public email: string,
    public password: string
  ) { }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private loginService: LoginService) { }
  user: User = new User('bental@hotmail.co.uk', 'test');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.loginService.signUp(this.user).map(response => {
      console.log(response);
    }).subscribe();
  }

}
