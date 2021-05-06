import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements InMemoryDbService{

  constructor() { }

  createDb() {
    return {
      heroes:[{id:1,name:'nom1'},
      {id:2,name:'nom2'},
      {id:3,name:'nom3'},
      {id:4,name:'nom4'},
      {id:5,name:'nom5'}]
    };
  }
}
