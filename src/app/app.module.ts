import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModelsComponent } from './models/models.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
//import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
//import {Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FooterComponent,
    NavbarComponent,
    ModelsComponent,
    OffresEmploiComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
