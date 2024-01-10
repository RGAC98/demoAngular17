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

  abrirDialog()
  {
    let dialog = this.dialog.open(DialogsComponent, {
      width: '95%',
      height: '80vh',
      panelClass: 'my-class'
    });
  }
}
