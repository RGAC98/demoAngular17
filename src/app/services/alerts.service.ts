import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AlertsService 
{
  constructor() 
  {}

  correctMessage(message:string)
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    })
  }

  correctMessage2(title:string, message:string)
  {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message
    })
  }

  errorMessage(title:string, message:string)
  {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message
    })
  }

  informationMessage(title:string, message:string)
  {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message
    })
  }
}
