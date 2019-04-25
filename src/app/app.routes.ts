import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: LayoutComponent },
];

export default routes;