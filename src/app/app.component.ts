import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  affiche:string = "none";
  affiche2:string = "none";
  title = 'Zbrrrra cortex les pyramides';
  sizeDefou:number =10;

  caAlikeMino(name:string){
    console.log("Rho putain ça a like mino!!! le nom c'est : "+name);
  }

  caBoolLikeBienIci(liked:Boolean){
     
    if(liked){
      //window.alert("Putain mino ça like tellement!!!");
      this.affiche ="block";
      this.affiche2 ="none";
    }else{
     // window.alert("Putain mino c'est de la grosse merde ça like pas!!!");
      this.affiche ="none";
      this.affiche2 ="block";
    }
  }

  dim(){
    this.sizeDefou = this.sizeDefou+1;
  }

}
