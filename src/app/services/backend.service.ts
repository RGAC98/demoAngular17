import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
  deps: [HttpClientModule]
})

export class BackendService 
{
  url: string = 'http://localhost:3000/';

  //variable para el observable
  private _refresh$ = new Subject<void>()

  constructor(private api: HttpClient) 
  {}

  get refresh$()
  {
    return this._refresh$;
  }

  //servicios para citas
  getCitas(): Observable<any>
  {
    return this.api.get(this.url+`citas`);
  }

  postRegistrarCita(pci_id:number, fecha:string, estado:string, descripcion:string): Observable<any>
  {
    return this.api.post(this.url+`citas`, {pci_id, fecha, estado, descripcion})
    .pipe(
      tap(() => {this._refresh$.next();})
    );
  }

  //servicios para pacientes
  postRegistrarPaciente(nombre:string, dni:string): Observable<any>
  {
    return this.api.post(this.url+`pacientes`, {nombre, dni})
    .pipe(
      tap(() => {this._refresh$.next();})
    );
  }

  getPacientes(): Observable<any>
  {
    return this.api.get(this.url+`pacientes`);
  }

  //servicios para especialistas
  postRegistrarEspecilista(nombre:string, dni:string): Observable<any>
  {
    return this.api.post(this.url+`especialistas`, {nombre, dni})
    .pipe(
      tap(() => {this._refresh$.next();})
    );
  }

  getEspecialistas(): Observable<any>
  {
    return this.api.get(this.url+`especialistas`);
  }

  //servicios para tratamientos
  postRegistrarTratamiento(nombre:string, valor:number, porcentaje:number): Observable<any>
  {
    return this.api.post(this.url+`tratamientos`, {nombre, valor, porcentaje})
    .pipe(
      tap(() => {this._refresh$.next();})
    );
  }

  getTratamientos(): Observable<any>
  {
    return this.api.get(this.url+`tratamientos`);
  }
}