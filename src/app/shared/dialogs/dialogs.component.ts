import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//servicios
import {BackendService} from '../../services/backend.service';
import {AlertsService} from '../../services/alerts.service';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.css'
})

export class DialogsComponent implements OnInit 
{
  //variable para cambiar entre secciones
  seccion: string;

  //variable para cambiar estados dentro de una seccion
  selector: number = 0;

  //variables para pacientes
  paciente = {
    id: 0,
    nombre: '',
    dni: ''
  }

  //variables para especialistas
  especialista = {
    id: 0,
    nombre: '',
    dni: ''
  }

  //variable para tratamientos
  tratamiento = {
    id: 0,
    nombre: '',
    valor: 0,
    porcentaje: 0.0
  }

  constructor(private dialogRef: MatDialogRef<DialogsComponent>,
              @Inject (MAT_DIALOG_DATA) private data: dialogData,
              private api: BackendService,
              private alert: AlertsService)
  {
    this.seccion = this.data.seccion;
  }

  ngOnInit(): void 
  {}

  //funciones para pacientes
  registrarPaciente()
  {
    this.api.postRegistrarPaciente(this.paciente.nombre, this.paciente.dni).subscribe((res:any) => {
      this.alert.correctMessage(res.mensaje);
      this.dialogRef.close();
    });
  }

  //funciones para especialistas
  registrarEspecialista()
  {
    this.api.postRegistrarEspecilista(this.especialista.nombre, this.especialista.dni).subscribe((res:any) => {
      this.alert.correctMessage(res.mensaje);
      this.dialogRef.close();
    });
  }

  //funciones para tratamientos
  registrarTratamiento()
  {
    this.api.postRegistrarTratamiento(this.tratamiento.nombre, this.tratamiento.valor, this.tratamiento.porcentaje).subscribe((res:any) => {
      this.alert.correctMessage(res.mensaje);
      this.dialogRef.close();
    });
  }
}

export interface dialogData
{
  seccion: string;
}