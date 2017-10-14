import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';

import { appRoutes } from './app.routes';

import { WebService } from './services/web/web.service';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user/user.service';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { FacebookComponent } from './components/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
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
