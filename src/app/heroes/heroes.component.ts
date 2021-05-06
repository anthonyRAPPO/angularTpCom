import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[SimpleService]
})
export class HeroesComponent implements OnInit {

  lesheros:Hero[] = [];
  today = new Date();

  constructor(private simpleService:SimpleService) { }

  ngOnInit(): void {
    this.lesheros = this.simpleService.getAllHeroes();
  }

  letrackerdehero(index:number,hero:Hero):number{
    console.log("hey"+hero.id);
    return hero.id;
  }

}
