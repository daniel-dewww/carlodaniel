import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  constructor(public _is:InformacionService) { }

  ngOnInit() {
  }

}
