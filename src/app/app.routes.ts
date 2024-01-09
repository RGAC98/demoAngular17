import { Routes } from '@angular/router';

//componentes
import {CitasComponent} from './citas/citas.component';
import {PacientesComponent} from './pacientes/pacientes.component';
import {EspecialistasComponent} from './especialistas/especialistas.component';
import {TratamientosComponent} from './tratamientos/tratamientos.component';
import {PagosComponent} from './pagos/pagos.component';

export const routes: Routes = [
    {path: 'citas', component: CitasComponent},
    {path: 'pacientes', component: PacientesComponent},
    {path: 'especialistas', component: EspecialistasComponent},
    {path: 'tratamientos', component: TratamientosComponent},
    {path: 'pagos', component: PagosComponent}
];
