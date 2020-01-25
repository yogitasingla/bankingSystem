import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }

    public Account_no="";
    public withdrawRs="";
    public errorMsg="";
    
    
  


    withdraw(){
    let data={
      Account_no:this.Account_no,
      
      withdrawRs:this.withdrawRs,
       
     }
       
        console.log("****************",data);
       this.BankingServiceService.withdraw(data).
       subscribe((result: any) => {
         console.log("&&&&&&&&&&&&&&&",result);
         
        if (result)
        {  
          console.log("^^^^^^^",result);
              if(result.status == "false"){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              if(result.message){

                console.log(result.message);
                this.errorMsg=result.message;
                  
              }
              
              else {
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
