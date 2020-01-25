import { Component, OnInit ,Inject} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
//import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';
@Component({
  selector: 'app-account-d',
  templateUrl: './account-d.component.html',
  styleUrls: ['./account-d.component.css']
})
export class AccountDComponent implements OnInit {

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router,private _snackBar: MatSnackBar,) { }
    
    public Account_no="";
    public depositAmount="";
    public errorMsg="";
     public durationInSeconds = 5000;
    
      // openSnackBar(result.message) {
      //   this._snackBar.open(result.message {
      //     duration: 2000,
      //   });
        
      // }  
      // open() {
      //   this._snackBar.open('sucessfull','ui',{ duration: 3000}) ;}
    
  


    deposit(){
    let data={
      Account_no:this.Account_no,
      
      depositAmount:this.depositAmount,
       
     }
    
          // duration: 2000,
      
        
     
      function openSnackbar(){}
        console.log("****************",data);
       this.BankingServiceService.deposit(data).
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
              
              else if(result.messageS){
                // open(result.messageS)
                // {
                //   this._snackBar.open(result.messageS ,'',{duration:3000})
                //  };
                
              
                console.log('sucessfull');
              
              }
      }
      }, error => {
        console.log(error)
      });

    }


  ngOnInit() {
  }
}
