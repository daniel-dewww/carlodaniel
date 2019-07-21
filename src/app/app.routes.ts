import {RouterModule, Routes} from '@angular/router';
import{
AboutComponent,
HeaderComponent,
IndexComponent,
ProjectComponent,

FooterComponent,
ContactComponent,
} from "./componentes/index.paginas";

const app_routes:Routes =[
    {path: 'about', component:AboutComponent },
    {path: 'header', component:HeaderComponent },
    {path: '', component:IndexComponent },
    {path: 'project', component:ProjectComponent },
    
    {path: 'footer', component:FooterComponent },
    {path: 'contact', component:ContactComponent },
    {path:'**', pathMatch: 'full', redirectTo:''}
];
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});