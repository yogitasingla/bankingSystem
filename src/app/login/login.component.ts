import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }
    
    public username="";
    public password="";
    public errorMsg="";
   
   login(){
     
      let data={
      username:this.username,
      
      password:this.password,
       
     }
       
        console.log("****************",data);
       this.BankingServiceService.loginS(data).
       subscribe((result: any) => {
         console.log("&&&&&&&&&&&&&&&",result);
         
        if (result)
        {  
          console.log("^^^^^^^",result);
              if(result.status == "FAILED"){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              
              else {
                this.router.navigate(['/', 'loginSucess']).then(nav => {
                  console.log(nav); // true if navigation is successful
                }, err => {
                  console.log(err);// when there's an error
                });
              
              }
      }
      }, error => {
        console.log(error)
      });

    }

    
    Registrationpage(){
   
          this.router.navigate(['/', 'registration']).then(nav => {
            console.log(nav); // true if navigation is successful
          }, err => {
            console.log(err) // when there's an error
          });
        
      }





//   login(){
//     let data1={
//       username:this.username,
//       password:this.password
//     }
//     this.BankingServiceService.login(data1).
//        subscribe((result: any) => {
//          console.log("&&&&&&&&&&&&&&&",result);
//         if(result){

//           if(result.message){
//             console.log(result.message);
//             this.errorMsg=result.message;
//           }
//           else{
//                 this.router.navigate(['/', 'loginSucess']).then(nav => {
//                   console.log(nav); // true if navigation is successful
//                 }, err => {
//                   console.log(err); // when there's an error
//                 });
//               }
               
//         }
//       }, error => {
//         console.log(error);
//       });

//   }
//   Registrationpage(){
   
//     this.router.navigate(['/', 'registration']).then(nav => {
//       console.log(nav); // true if navigation is successful
//     }, err => {
//       console.log(err) // when there's an error
//     });
  
// }

  ngOnInit() {
  }

}
