import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Usuarios } from './page-usuarios';


@NgModule({
    declarations: [
      Usuarios,
    ],
    imports: [
      IonicPageModule.forChild(Usuarios),
    ],
    entryComponents: [
      Usuarios
    ]
  })
  export class UsuariosModule {}