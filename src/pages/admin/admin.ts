import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from 'ionic-angular';
import { Producto } from "../models/producto";
import { Pedido } from '../models/pedido'
import { LoginPage } from "../login/login";

@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html'
})
export class AdminPage {

    data = { usuario: "", password: "" };
    productos: Producto[];
    pedido: Pedido;
    total: number = 0;
    constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {

    }

    ionViewDidEnter() {
        this.storage.get("ventas").then(val => {
                this.total = val;
        });
        this.storage.get("productos").then(val=>{
            console.log(val);
            let produc: Producto[]= JSON.parse(val);
            let canti:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            for(let i=0;i<produc.length;i++){
                if(produc[i].nombre=="Pepsi"){
                    canti[0]= canti[0]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Manzana"){
                    canti[1]= canti[1]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Coca-cola"){
                    canti[2]= canti[2]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Hit Mora"){
                    canti[3]= canti[3]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Hit Mango"){
                    canti[4]= canti[4]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Consome"){
                    canti[5]= canti[5]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Costilla"){
                    canti[6]= canti[6]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Chuleta"){
                    canti[7]= canti[7]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Pollo Broaster"){
                    canti[8]= canti[8]+produc[i].cantidad;
                }
                if(produc[i].nombre=="P. Hawaina"){
                    canti[9]= canti[9]+produc[i].cantidad;
                }
                if(produc[i].nombre=="P. Jamon y Queso"){
                    canti[10]= canti[10]+produc[i].cantidad;
                }
                if(produc[i].nombre=="P. Vegetariana"){
                    canti[11]= canti[11]+produc[i].cantidad;
                }
                if(produc[i].nombre=="P. Especial"){
                    canti[12]= canti[12]+produc[i].cantidad;
                }
                if(produc[i].nombre=="P. Pepperoni"){
                    canti[13]= canti[13]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Tres Leches"){
                    canti[14]= canti[14]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Helado"){
                    canti[15]= canti[15]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Fresas con Crema"){
                    canti[16]= canti[16]+produc[i].cantidad;
                }
                if(produc[i].nombre=="Flan"){
                    canti[17]= canti[17]+produc[i].cantidad;
                }
            }
            this.productos=[{nombre:"Pepsi",cantidad:canti[0],total:canti[0]*2000},
            {nombre:"Manzana",cantidad:canti[1],total:canti[1]*2000},
            {nombre:"Coca-cola",cantidad:canti[2],total:canti[2]*2000},
            {nombre:"Hit Mora",cantidad:canti[3],total:canti[3]*1800},
            {nombre:"Hit Mango",cantidad:canti[4],total:canti[4]*1800},
            {nombre:"Consome",cantidad:canti[5],total:canti[5]*6000},
            {nombre:"Costilla",cantidad:canti[6],total:canti[6]*12000},
            {nombre:"Chuleta",cantidad:canti[7],total:canti[7]*12000},
            {nombre:"Pollo Broaster",cantidad:canti[8],total:canti[8]*20000},
            {nombre:"P. Hawaina",cantidad:canti[9],total:canti[9]*4000},
            {nombre:"P. Jamon y Queso",cantidad:canti[10],total:canti[10]*4000},
            {nombre:"P. Vegetariana",cantidad:canti[11],total:canti[11]*4000},
            {nombre:"P. Especial",cantidad:canti[12],total:canti[12]*5000},
            {nombre:"P. Pepperoni",cantidad:canti[13],total:canti[13]*5000},
            {nombre:"Tres Leches",cantidad:canti[14],total:canti[14]*7000},
            {nombre:"Helado",cantidad:canti[15],total:canti[15]*3000},
            {nombre:"Fresas con Crema",cantidad:canti[16],total:canti[16]*5000},
            {nombre:"Flan",cantidad:canti[17],total:canti[17]*4500}
            ];
        });
    }

    actualizarPedido(valor: number) {
        this.pedido = { estado: valor, productos: this.productos };
    }
    logout() {
        this.storage.set("logged",false);
        this.storage.set("user",{});
        this.navCtrl.setRoot(LoginPage);
    }
}