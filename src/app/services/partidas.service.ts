import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {


  private baseUrl : string;

  constructor( private httpClient: HttpClient ) { 
    this.baseUrl = 'http://localhost:3000/api'
  }


  
 obtenerPatidas(){
  return firstValueFrom(
    this.httpClient.get<any>(`${this.baseUrl}/partidas`)
  )
 }


}
