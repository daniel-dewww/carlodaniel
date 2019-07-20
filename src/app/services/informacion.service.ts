import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  info:any ={};
  cargada:boolean = false;
  cargaPortafolios:boolean = false;
  portafolio:any[]=[];
    constructor(public http:Http) {
    this.cargaInfo();
    this.cargaPortafolio();

  }
     public cargaInfo(){
      this.http.get("assets/data/info.pagina.json")
      .subscribe( data =>{
         //console.log(data.json());
         this.cargada = true;
         this.info = data.json();
      })
    
   }
  public cargaPortafolio(){
    this.http.get("https://portafolio-e251f.firebaseio.com/Portafolio.json")
    .subscribe( data =>{
       console.log(data.json());
       this.cargaPortafolios = true;
       this.portafolio = data.json();
    })
   }
}
