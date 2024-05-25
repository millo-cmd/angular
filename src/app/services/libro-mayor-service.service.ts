import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroMayorServiceService {

  private apiUrl = 'http://localhost:3000/api/libroMayor';

  constructor(private http: HttpClient) { }

  getLibroMayor(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
