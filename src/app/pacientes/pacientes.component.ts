import { Component, OnInit } from '@angular/core';

//services
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})

export class PacientesComponent implements OnInit
{
  pacientes: Array<any> = [];

  constructor(private api: BackendService)
  {}

  ngOnInit(): void 
  {
    this.getPacientes();
  }

  getPacientes()
  {
    this.api.getPacientes().subscribe((res:any) => {
      this.pacientes = res.pacientes;
      console.log(this.pacientes);
    });
  }
}