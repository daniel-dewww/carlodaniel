import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
import {Expo} from 'gsap/all';


declare var TweenMax: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
  
})

export class IndexComponent implements OnInit {
  public personal;
  constructor(public _is:InformacionService) { }

  ngOnInit() {
    this.animacionIndex();
    
  }
 
  animacionIndex(): void {
    TweenMax.from(".name", 2, {
      delay: 0.4,
      y: 10,
      opacity: 0,
      ease: Expo.easeInOut
})

TweenMax.staggerFrom(".hello", 2.2, {
      delay: 0.4,
      opacity: 0,
      ease: Expo.easeInOut
}, 0.1);
  }
}
