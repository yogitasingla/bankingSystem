import { Component, OnInit } from '@angular/core';
import { BankingServiceService } from '../_services/banking-service.service';


import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-sucess-r',
  templateUrl: './sucess-r.component.html',
  styleUrls: ['./sucess-r.component.css']
})
export class SucessRComponent implements OnInit {

  constructor(public BankingServiceService: BankingServiceService,
    
    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router) { }
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
