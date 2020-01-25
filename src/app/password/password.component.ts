import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router,private _formBuilder: FormBuilder) {   
    }


    public email="";
    public password="";
    public errorMsg="";
    public newPassword="";

   public conPassword="";
  

    changepassword(){
     
      let data={
      email:this.email,
      
      password:this.password,
      newPassword:this.newPassword,
      conPassword:this.conPassword
       
     }
       
        console.log("****************",data);
       this.BankingServiceService.password(data).
       subscribe((result: any) => {
         console.log("&&&&&&&&&&&&&&&",result);
         
        if (result)
        {  
          console.log("^^^^^^^",result);
              if(result.status == "FAILED"){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              if(result.message){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              
              else {
                console.log('sucess');
                
              
              }
      }
      }, error => {
        console.log(error)
      });
    }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }
  }


