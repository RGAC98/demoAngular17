import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import {BackendService} from '../services/backend.service';
import {DialogsService} from '../services/dialogs.service';

@Component({
  selector: 'app-especialistas',
  standalone: true,
  imports: [],
  templateUrl: './especialistas.component.html',
  styleUrl: './especialistas.component.css'
})

export class EspecialistasComponent implements OnInit
{
  //variable para el observador
  suscription: any = Subscription;

  //lista de especialistas
  especialistas: Array<any> = [];

  constructor(private api: BackendService, public dialogs: DialogsService)
  {}

  ngOnInit(): void 
  {
    this.obtenerEspecialistas();
    this.suscription = this.api.refresh$.subscribe(() => {
      this.obtenerEspecialistas();
    });
  }

  obtenerEspecialistas()
  {
    this.api.getEspecialistas().subscribe((res:any) => {
      this.especialistas = res.especialistas;
    });
  }
}