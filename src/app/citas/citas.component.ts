import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import {BackendService} from '../services/backend.service';
import {DialogsService} from '../services/dialogs.service';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})

export class CitasComponent implements OnInit 
{
  //variable para el observador
  suscription: any = Subscription;

  //lista de especialistas
  citas: Array<any> = [];

  constructor(private api: BackendService, public dialogs: DialogsService)
  {}

  ngOnInit(): void 
  {
    this.obtenerCitas();
    this.suscription = this.api.refresh$.subscribe(() => {
      this.obtenerCitas();
    })
  }

  obtenerCitas()
  {
    this.api.getCitas().subscribe((res:any) => {
      this.citas = res.citas;
    });
  }
}
