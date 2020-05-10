import { Validators } from '@angular/forms';
import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//import {MatSort} from '@angular/material/sort';

import {ActivatedRoute,Router} from "@angular/router";
import { BankingServiceService } from '../_services/banking-service.service';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-acc-statment',
  templateUrl: './acc-statment.component.html',
  styleUrls: ['./acc-statment.component.css']
})
export class AccStatmentComponent implements OnInit {
  displayedColumns: string[] = ['position',  'depositAmount', 'withdrawAmount','date'];
  dataSource: MatTableDataSource<PeriodicElement>;
 // @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public BankingServiceService: BankingServiceService,

    private http: HttpClient,private  route: ActivatedRoute,
    private  router: Router,

     @Inject(MAT_SNACK_BAR_DATA)
     public data: any) { }

    public Account_no="";
    public depositAmount="";
    public errorMsg="";
    public statement=[];


    accStat(){


    let data={
      Account_no:this.Account_no,



     }

        console.log("****************",data);
       this.BankingServiceService.accStatment(data).
       subscribe((result: any) => {
         console.log("&&&&&&&&&&&&&&&",JSON.stringify(result));

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

              else if(result.balance) {
                console.log('sucessfull');

                let users=result.balance.map((val, index)=>{
                  delete val._id,val.Account_no;
                  val.date = val.date ? new Date(val.date).toLocaleDateString()+ '-'+new Date(val.date).toLocaleTimeString() : '';

                  val.position = index+ 1;
                  return val});
                console.log(users)

                this.dataSource = new MatTableDataSource(users);

                this.dataSource.paginator = this.paginator;



              }

      }

      }, error => {
        console.log(error)
      });

    }

  ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

}
export interface PeriodicElement {

  position: number;

  depositAmount:number;
  withdrawRs: number;
  date:string
}

// const ELEMENT_DATA: PeriodicElement[] = [


//   {position:1, depositAmount:0, withdrawRs:0, date:''}
// ];
