import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {SucessRComponent} from "./sucess-r/sucess-r.component";
import {SucessLComponent} from "./sucess-l/sucess-l.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import{PasswordComponent} from "./password/password.component";
import{AccountDComponent} from "./account-d/account-d.component";
import{WithdrawComponent} from "./withdraw/withdraw.component";
import{AccStatmentComponent} from "./acc-statment/acc-statment.component";
import{CheckBComponent} from "./check-b/check-b.component";



const routes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "registrationSucess", component: SucessRComponent },
  { path: "loginSucess", component: SucessLComponent },
  { path: "navBar", component: MainNavComponent },
  { path: "password", component:  PasswordComponent},
  { path: "deposit", component:  AccountDComponent},
  { path: "withdraw", component:  WithdrawComponent},
  { path: "accStatment", component: AccStatmentComponent},
  { path: "checkB", component: CheckBComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
