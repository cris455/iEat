import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PizzaData } from '../providers/pizzas-data';
import { MenuLateralPage } from '../pages/MenuLateral/menulateral'
import { BebidaData } from '../providers/bebidas-data';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BebidaPage } from "../pages/bebida/bebida";
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CarritoPage } from '../pages/carrito/carrito';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BebidaPage,
    HomePage,
    LoginPage,
    MenuLateralPage,
    PedidosPage,
    CarritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaData,
    BebidaData
  ]
})
export class AppModule {}
