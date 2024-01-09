import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

//componentes
import {SharedComponent} from '../shared/shared.component';

@Injectable({
  providedIn: 'root'
})

export class DialogsService 
{
  constructor(private dialog: MatDialog) 
  {}

  abrirDialog()
  {
    let dialog = this.dialog.open(SharedComponent, {
      width: '95%',
      height: '80vh',
      panelClass: 'my-class'
    });
  }
}
