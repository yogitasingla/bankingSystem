import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule,MatCardModule,MatButtonModule,MatAutocompleteModule,MatSelectModule,MatRadioModule,
  MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatIconModule,MatToolbarModule,
  MatListModule,MatExpansionModule, MatMenuModule,MatDividerModule,MatStepperModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatDialogModule,MatSnackBarModule,} from '@angular/material';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
  import {FormsModule} from "@angular/forms";

  import{ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { SucessRComponent } from './sucess-r/sucess-r.component';
import { SucessLComponent } from './sucess-l/sucess-l.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PasswordComponent } from './password/password.component';
import { AccountDComponent } from './account-d/account-d.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CheckBComponent } from './check-b/check-b.component';
import { AccStatmentComponent } from './acc-statment/acc-statment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    SucessRComponent,
    SucessLComponent,
    MainNavComponent,
    PasswordComponent,
    AccountDComponent,
    WithdrawComponent,
    CheckBComponent,
    AccStatmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,

    MatRadioModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    LayoutModule,



  ],
  providers: [ { provide:MAT_SNACK_BAR_DATA, useValue: {} },],

  bootstrap: [AppComponent]
})
export class AppModule { }
