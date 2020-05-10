import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BankingServiceService {

  constructor(private httpClient : HttpClient, private router :Router) { }

  registration(data1){

    
    const url = `http://localhost:6001/webhook/register`;
 
  return this.httpClient.post(url, data1).pipe(
    tap(result =>{})
  );

}
loginS(data){
  const url = `http://localhost:6001/webhook/login`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}
password(data){
  const url = `http://localhost:6001/webhook/chnagePassword`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}

deposit(data){
  const url = `http://localhost:6001/webhook/depositAmount`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}
withdraw(data){
  const url = `http://localhost:6001/webhook/withdrawAmount`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}
checkB(data){
  const url = `http://localhost:6001/webhook/checkBalance`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}
accStatment(data){
  const url = `http://localhost:6001/webhook/checkAll`;

return this.httpClient.post(url, data).pipe(
  tap(result =>{})
);

}





}