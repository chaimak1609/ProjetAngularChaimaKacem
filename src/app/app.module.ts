import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModelsComponent } from './models/models.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponentComponent } from './articles-component-component/articles-component-component.component';
import { AddProductComponentComponentComponent } from './add-product-component-component/add-product-component-component.component';
import { NotFoundComponentComponentComponent } from './not-found-component-component/not-found-component-component.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
//import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
//import {Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FooterComponent,
    NavbarComponent,
    ModelsComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponentComponent,
    AddProductComponentComponentComponent,
    NotFoundComponentComponentComponent,
    TemplateDrivenFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
