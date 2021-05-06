import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input()
  name:string="petit nom de hero pepouze mino";

  @Input()
  size =0;

  affiche:boolean=false;

  @Output("outMino")
  out = new EventEmitter();

  @Output("boolLikedMino")
  boolLiked = new EventEmitter <Boolean>();

  @Output()
  sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  petiteMethodePepouze(){
    console.log("YEA on est pepouze mino ");
  }

  petitLikeMino(){
    console.log("Allez mino il faut emettre");
    this.out.emit(this.name);
  }

  dec(){
    this.size = this.size - 1;
    this.sizeChange.emit(this.size);
  }

  inc(){
    this.size = this.size + 1;
    this.sizeChange.emit(this.size);
  }

  methodeChange(bol:boolean){
    this.affiche=bol;
    this.boolLiked.emit(bol);
  }

}
