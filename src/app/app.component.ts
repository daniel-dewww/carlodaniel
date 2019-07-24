import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';

//SERVICIOS
import {InformacionService} from './services/informacion.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public _is:InformacionService){

  }
  ngOnInit(): void {
    
  }

}
