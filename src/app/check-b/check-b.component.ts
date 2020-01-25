import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';
@Component({
  selector: 'app-check-b',
  templateUrl: './check-b.component.html',
  styleUrls: ['./check-b.component.css']
})
export class CheckBComponent implements OnInit {

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }


    public Account_no="";
    public depositAmount="";
    public errorMsg="";
    
    
  


   checkb(){
    let data={
      Account_no:this.Account_no,
      
      
       
     }
       
        console.log("****************",data);
       this.BankingServiceService.checkB(data).
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
