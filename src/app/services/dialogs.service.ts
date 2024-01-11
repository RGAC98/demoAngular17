import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

//componentes
import {DialogsComponent} from '../shared/dialogs/dialogs.component';

@Injectable({
  providedIn: 'root'
})

export class DialogsService 
{
  constructor(private dialog: MatDialog) 
  {}

  abrirDialog(seccion:string)
  {
    let dialog = this.dialog.open(DialogsComponent, {
      data: {seccion:seccion},
      width: '30vw',
      height: '60vh',
      panelClass: 'my-class'
    });
  }
}
