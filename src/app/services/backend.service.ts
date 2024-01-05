import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  deps: [HttpClientModule]
})

export class BackendService 
{
  url: string = 'http://localhost:3000/';

  constructor(private api: HttpClient) 
  {}

  //servicios para 
  getCitas(): Observable<any>
  {
    return this.api.get(this.url+`citas`);
  }

  //servicios para pacientes
  getPacientes(): Observable<any>
  {
    return this.api.get(this.url+`pacientes`);
  }

}