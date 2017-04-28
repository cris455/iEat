import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
//import { HomePage } from "../home/home";
import { MenuLateralPage } from "../MenuLateral/menulateral";
import { Storage } from '@ionic/storage';
import { Usuario } from "../models/usuario";
import { UsuarioData } from "../../providers/login-data";
import { AdminPage } from "../admin/admin";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usu: Usuario;
  usuarios: Usuario[];
  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public storage: Storage, public service: UsuarioData, public toastCtrl: ToastController) {
    this.usuarios = [];
  }

  ionViewDidEnter() {
    this.usuarios = this.service.data;
  }
  login() {
    this.usu = { usuario: this.user, password: this.pass };
    let coincide: boolean = false;
    let toast = this.toastCtrl.create({
      message: 'Nombre de usuario o Contraseña incorrecta',
      duration: 2000
    });
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario == this.usu.usuario) {
        if (this.usuarios[i].password == this.usu.password) {
          this.storage.set("logged", true);
          this.storage.set("user", JSON.stringify(this.usu));
          if (this.usu.usuario == "admin") {
            this.navCtrl.setRoot(AdminPage);
          } else {
            this.navCtrl.setRoot(MenuLateralPage);
          }
          coincide = true;
          break;
        }
      }
    }
    if (!coincide) {
      toast.present();
    }

  }
}
