import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import {  AngularFireDatabase } from 'angularfire2/database';
//import { EditProfile } from '../edit-profile/edit-profile';
//import { MyProfile } from '../my-profile/my-profile';

//import { Usuario } from '../../pages/usuario/page-usuario'


@IonicPage({
	name: 'usuarios',
  segment: 'usuarios'
  })
@Component({
  selector: 'page-page-usuarios',
  templateUrl: 'page-usuarios.html'
})
export class Usuarios {


    usuarios: any;

  constructor(public navCtrl: NavController,
     public dbFire:AngularFireDatabase) {

  }


   ionViewDidLoad(){

    this.usuarios = this.dbFire.list("users/").valueChanges();


  }


   irParaEditarPerfil(event, usuario){
   this.navCtrl.push("editar-perfil", { 
      usuario:usuario,
      is_admin:true
    }); 
  }

  irParaPerfil(event, usuario){
    /*this.navCtrl.push(MyProfile, { 
      usuario:usuario,
      is_admin:true
    });*/
  }


}

