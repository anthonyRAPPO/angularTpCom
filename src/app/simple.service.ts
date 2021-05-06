import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  getAllHeroes():Hero[]{
    return [{id:0,name:"heroIne",team:"Came"},
    {id:1,name:"SeHeroToNine",team:"Came"},
    {id:2,name:"AltHeroPhile",team:"Sportifs"},
    {id:3,name:"FerHero Rocher",team:"GrosPorc"}]
  }
}
