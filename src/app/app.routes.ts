import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const appRoutes: Routes = [
    {
        path: 'profile', component: ProfileComponent// subroute test done
    },
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    // {
    //     path: '',
    //     redirectTo: '/api',
    //     pathMatch: 'full'
    // },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];
