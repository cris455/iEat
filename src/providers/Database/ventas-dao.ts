import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DatabaseConnection } from './database-connection';
//import { Venta } from '../../pages/models/venta'
/*
  Generated class for the VentasDao provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VentasDao {

  constructor(public con:DatabaseConnection) { }

  createTable():Promise<any>{
     const sql = "CREATE TABLE IF NOT EXISTS ventas (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre VARCHAR, cantidad INTEGER, total INTEGER, cuenta INTEGER)";
     return this.con.executeSQL(sql,[]);
  }
 /*
  insert(venta:Venta):Promise<number>{
    const sql="INSERT INTO ventas (nombre,cantidad,total,cuenta) VALUES (?,?,?,?)";
    return this.con.executeSQL( sql , [venta.nombre,venta.cantidad,venta.total,venta.cuenta] ).then(result=>{
      return Promise.resolve(result.insertId);
    });
  }
  delete(id:number):Promise<any>{
    const sql="DELETE FROM ventas FROM id=?";
    return this.con.executeSQL(sql, [id] );
  }
  allDay(cuenta:number):Promise<Venta[]>{
    const sql="SELECT * FROM ventas WHERE cuenta=?";
    return this.con.executeSQL(sql,[cuenta]).then(result=>{
      let ventas = [];
      for(let i = 0 ; i<result.rows.length; i++){
        let venta:Venta = result.rows.item(i)
        ventas.push(venta);
      }
      return Promise.resolve(ventas);
    });
  }
  
  all():Promise<Venta[]>{
    const sql="SELECT * FROM ventas";
    return this.con.executeSQL(sql,[]).then(result=>{
      let ventas = [];
      for(let i = 0 ; i<result.rows.length; i++){
        let venta:Venta = result.rows.item(i)
        ventas.push(venta);
      }
      return Promise.resolve(ventas);
    });
  }*/

}
