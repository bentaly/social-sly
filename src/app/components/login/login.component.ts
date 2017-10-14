import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import 'rxjs/add/operator/map';

export class User {

  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-login', // todo change selector
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}
  user: User = new User('bental@hotmail.co.uk', 'test');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.loginService.login(this.user).map(response => {
      console.log(response);
    })
    .subscribe();
  }

}

