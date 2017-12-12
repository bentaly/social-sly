import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { WebService } from '../../services/web/web.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ss-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tweets;

  constructor(private userService: UserService,
    private webService: WebService) {
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        console.log('user', user);
        const token = user.twitter.token;

        this.webService.getTweets(token)
          .subscribe(
            res => this.tweets = res,
            err => console.log(err)
          );
      });
  }
}
