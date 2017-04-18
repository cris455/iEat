import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BebidaPage } from "../bebida/bebida";
import { AboutPage } from "../about/about";
import { PizzaPage } from "../pizza/pizza";
import { ComidaPage } from "../comida/comida";
import { PostrePage } from "../postre/postre";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  goToPizza(){
    this.navCtrl.parent.push(PizzaPage);
  }
  goToBebidas(){
    this.navCtrl.parent.push(BebidaPage);
  }
  goToPostres(){
    this.navCtrl.parent.push(PostrePage);
  }
  goToComida(){
    this.navCtrl.parent.push(ComidaPage);
  }

}
