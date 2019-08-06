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
    
     
  }
  
  
}
