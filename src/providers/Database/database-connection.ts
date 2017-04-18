import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite'

/*
  Generated class for the DatabaseConnection provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DatabaseConnection {

  db:SQLiteObject;
  constructor() { }

  openConnection():Promise<SQLiteObject>{
    const sqlite = new SQLite();
    return sqlite.create({
      name: "contabilidad.db",
      location: 'default'
    }).then(db=>{
      this.db = db;
      return Promise.resolve(db);
    });
  }

  executeSQL(sql:string, params:any[]):Promise<any>{
    if(this.db){
      return this.db.executeSql(sql,params);
    }
  }

}
