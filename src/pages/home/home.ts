import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BebidaPage } from "../bebida/bebida";
import { AboutPage } from "../about/about";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  goToPizza(){
    this.navCtrl.push(AboutPage);
  }
  goToBebidas(){
    this.navCtrl.push(BebidaPage);
  }
  goToPostres(){
    this.navCtrl.push(AboutPage);
  }

}
