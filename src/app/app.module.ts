import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";
//RUTAS
import {app_routing} from "./app.routes";

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IndexComponent } from './componentes/index/index.component';
import { AboutComponent } from './componentes/about/about.component';

import { ContactComponent } from './componentes/contact/contact.component';
import { ProjectComponent } from './componentes/project/project.component';

//SERVICIOS
import {InformacionService} from './services/informacion.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    
    ContactComponent,
    ProjectComponent
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule 

  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
