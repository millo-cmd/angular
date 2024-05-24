import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DiarioServiceService {

  private baseUrl : string;

  constructor( private httpClient: HttpClient ) { 
    this.baseUrl = 'http://localhost:3000/api'
  }


  
  obtenerCuentas(){
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/cuentas`)
    )
  }
  crearCuentas(body:FormData):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/cuentas`, body)
  }
  
  crearAccount(fromValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/cuentas`,fromValue)
    )
  }
}
