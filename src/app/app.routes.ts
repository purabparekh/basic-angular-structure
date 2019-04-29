import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';

export const appRoutes: Routes = [
    { path: '', loadChildren: './modules/layout/layout.module#LayoutModule' },
    { path: 'login', component: LoginComponent },
];
