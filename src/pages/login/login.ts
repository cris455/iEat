import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import { HomePage } from "../home/home";
import { MenuLateralPage } from "../MenuLateral/menulateral";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {  }

  login(){
    this.navCtrl.setRoot(MenuLateralPage);
  }
}
