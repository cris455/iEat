import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from 'ionic-angular';
import { Producto } from "../models/producto";
import { Pedido } from '../models/pedido'

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  data = {usuario:"",password:""};
  productos: Producto[];
  pedido: Pedido;
  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {
      this.productos=[];
  }

  ionViewDidEnter(){
    this.storage.get("user").then((val)=>{
        this.data= { usuario:val.nombre,password:val.password};
      });
    this.storage.get(this.data.usuario).then(val=>{
      this.productos=JSON.parse(val);  
    });
    this.pedido = {estado:0,productos:this.productos};
  }
  
  actualizarPedido(valor:number){
      this.pedido = {estado:valor,productos:this.productos}; 
  }

  /*cancelarPedido(){
    this.storage.set(this.data.usuario,[]);
    this.productos= [];
    let toast = this.toastCtrl.create({
        message: 'Su orden fue eliminada con éxito',
        duration: 2000
      });
      toast.present();
  }  */
}