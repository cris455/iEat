import { Component } from '@angular/core';

import { NavController, ToastController, LoadingController } from 'ionic-angular';
//import { HomePage } from "../home/home";
import { MenuLateralPage } from "../MenuLateral/menulateral";
import { Storage } from '@ionic/storage';
import { Usuario } from "../models/usuario";
import { UsuarioData } from "../../providers/login-data";
import { AdminPage } from "../admin/admin";
import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usu: Usuario;
  usuarios: Usuario[];
  user: string;
  pass: string;

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public service: UsuarioData,
    public toastCtrl: ToastController,
    public loginService: LoginService,
    public loadingCtrl: LoadingController) {
    this.usuarios = [];
  }

  ionViewDidEnter() {
    this.usuarios = this.service.data;
  }
  login() {

    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.loginService.login(this.user, this.pass).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        if (this.user == "admin") {
          this.navCtrl.setRoot(AdminPage);
        } else {
          this.navCtrl.setRoot(MenuLateralPage);
        }
      } else {
        this.toastCtrl.create({ message: "Usuario o password invalid", duration: 3000 }).present();
      }

    }, err => {
      console.log(JSON.stringify(err));
    });
  }





}

