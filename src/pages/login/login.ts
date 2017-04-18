import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import { HomePage } from "../home/home";
import { MenuLateralPage } from "../MenuLateral/menulateral";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user:string;
  pass:string;

  constructor(public navCtrl: NavController, public storage: Storage) {  }

  login(){
    let datos = {usuario:this.user, password:this.pass};
    this.storage.set("logged",true);
    this.storage.set("user",JSON.stringify(datos));
    this.navCtrl.setRoot(MenuLateralPage);
  }
}
