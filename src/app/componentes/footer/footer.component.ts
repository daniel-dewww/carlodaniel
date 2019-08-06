import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year:number = new Date().getFullYear();
  public social = [];
  public personal=[];
constructor(private _is:InformacionService){

}
  ngOnInit() {
    
  }
 
}
