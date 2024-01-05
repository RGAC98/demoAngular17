import { Component, OnInit } from '@angular/core';

//services
import {BackendService} from '../services/backend.service';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})

export class CitasComponent implements OnInit 
{
  constructor(private api: BackendService)
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
