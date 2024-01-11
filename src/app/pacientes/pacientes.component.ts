import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import {BackendService} from '../services/backend.service';
import {DialogsService} from '../services/dialogs.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})

export class PacientesComponent implements OnInit
{
  //variable para el observador
  suscription: any = Subscription;

  //lista de pacientes
  pacientes: Array<any> = [];

  constructor(private api: BackendService, public dialogs: DialogsService)
  {}

  ngOnInit(): void 
  {
    this.getPacientes();
    this.suscription = this.api.refresh$.subscribe(() => {
      this.getPacientes();
    });
  }

  getPacientes()
  {
    this.api.getPacientes().subscribe((res:any) => {
      this.pacientes = res.pacientes;
    });
  }
}