import { BankingServiceService } from '../_services/banking-service.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute,Router} from "@angular/router";



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface gender {
  value: string;
  viewValue: string;
}

let MOBILE_PATTERN = /[0-9\+\-\ ]/;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  PhoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(MOBILE_PATTERN)
  ]);
  matcher = new MyErrorStateMatcher();

  genders: gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'other'}
  ];


   username="";
  public gender="";
  public city="";
  public email="";
  public phone_no="";
  public password="";
  public errorMsg="";
     data1="{}";
    name='';

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }


    submit(){
     
      let data1={
      username:this.username,
      gender:this.gender,
      city:this.city,
      email:this.email,
      phone_no:this.phone_no,
      password:this.password,
       
     }
       
        console.log("****************",data1);
       this.BankingServiceService.registration(data1).
       subscribe((result: any) => {
         console.log("&&&&&&&&&&&&&&&",result);
         
        if (result)
        {
              if(result.message){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              
              else {
                this.router.navigate(['/', 'registrationSucess']).then(nav => {
                  console.log(nav); // true if navigation is successful
                }, err => {
                  console.log(err) // when there's an error
                });
              
              }
      }
      }, error => {
        console.log(error);
      });

    }

    
    loginpage(){
      
        this.router.navigate(['/', 'login']).then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
      
    }

  ngOnInit() {

    
    



  
 }

}
