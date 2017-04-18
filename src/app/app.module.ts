import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { PizzaData } from '../providers/pizzas-data';
import { BebidaData } from '../providers/bebidas-data';
import { ComidaData } from '../providers/comidas-data';
import { PostreData } from '../providers/postres-data';

import { BebidaPage } from "../pages/bebida/bebida";
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CarritoPage } from '../pages/carrito/carrito';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuLateralPage } from '../pages/MenuLateral/menulateral';
import { PizzaPage } from '../pages/pizza/pizza';
import { ComidaPage } from '../pages/comida/comida';
import { PostrePage } from '../pages/postre/postre';
@NgModule({
  declarations: [
    MyApp,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage,
    PizzaPage,
    ComidaPage,
    PostrePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage,
    PizzaPage,
    ComidaPage,
    PostrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaData,
    BebidaData,
    ComidaData,
    PostreData
  ]
})
export class AppModule {}
