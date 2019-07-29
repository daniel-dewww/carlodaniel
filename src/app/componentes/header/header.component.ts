import { Component, OnInit } from '@angular/core';
import {Expo} from 'gsap/all';
//SERVICIOS
import {InformacionService} from '../../services/informacion.service';
import { ThemeService } from "../../services/theme.service";

//variables globales
declare var TweenMax: any;
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  returndark:void = this.returnDark();
  returnlight:void = this.returnLight();
  constructor(public _is:InformacionService,private themeService: ThemeService) { }

  ngOnInit() {
    this.animacionHeader();
    this.menuToggle();
    this.returnLight()
  }
  animacionHeader(): void {
    TweenMax.from("#brand", 2, {
      delay: 0.4,
      y: 10,
      opacity: 0,
      ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 4, {
      delay: 0.4,
      opacity: 0,
      ease: Expo.easeInOut
}, 0.1);
  }

  menuToggle(){
    $("#toggle").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
  });
  
  $("#resize ul li a").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
  });
  
  $(".close-btn").click(function() {
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");
  });
  }
  

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
    returnDark(){
      
        this.themeService.setDarkTheme();
      
  }
  returnLight(){
   
      this.themeService.setLightTheme();
      
    }
}
