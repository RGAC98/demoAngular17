import { Component, OnInit } from '@angular/core';

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
  constructor(private api: BackendService, public dialog: DialogsService)
  {}

  ngOnInit(): void 
  {
    this.obtenerCitas();
  }

  obtenerCitas()
  {
    this.api.getCitas().subscribe((res:any) => {
      console.log(res);
    });
  }
}
