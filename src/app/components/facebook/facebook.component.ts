import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.logInWithFacebook().map(user => {
    //   console.log('user', user);
    // })
    // .subscribe();
  }

}
