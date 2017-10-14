import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login/login.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) {

    const randomNum = Math.random() * 10;
    this.user = new User(randomNum + '@hotmail.co.uk', 'test');

  }


  user: User;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.loginService.signUp(this.user).map(response => {
      if (response.status === 200) {

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/profile']);
        // this.router.navigate(['/profile'], response._body);
      }
    }).subscribe();
  }

}
