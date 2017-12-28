import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

import { appRoutes } from './app.routes';

import { WebService } from './services/web/web.service';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user/user.service';
import { GmailComponent } from './components/gmail/gmail.component';
import { GmailListItemsComponent } from './components/gmail-list-items/gmail-list-items.component';
import { GmailDetailViewComponent } from './components/gmail-detail-view/gmail-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    GmailComponent,
    GmailListItemsComponent,
    GmailDetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    WebService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
