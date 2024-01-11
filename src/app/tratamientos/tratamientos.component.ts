import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import {BackendService} from '../services/backend.service';
import {DialogsService} from '../services/dialogs.service';

@Component({
  selector: 'app-tratamientos',
  standalone: true,
  imports: [],
  templateUrl: './tratamientos.component.html',
  styleUrl: './tratamientos.component.css'
})

export class TratamientosComponent implements OnInit
{
  //variable para el observador
  suscription: any = Subscription;

  //lista de especialistas
  tratamientos: Array<any> = [];

  constructor(private api: BackendService, public dialogs: DialogsService)
  {}

  ngOnInit(): void 
  {
    this.obtenerTratamientos();
    this.suscription = this.api.refresh$.subscribe(() => {
      this.obtenerTratamientos();
    });
  }

  obtenerTratamientos()
  {
    this.api.getTratamientos().subscribe((res:any) => {
      this.tratamientos = res.tratamientos;
    });
  }
}