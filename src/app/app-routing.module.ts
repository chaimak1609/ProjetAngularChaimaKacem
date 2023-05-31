import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponentComponent } from './articles-component-component/articles-component-component.component';
import { AddProductComponentComponentComponent } from './add-product-component-component/add-product-component-component.component';
import { NotFoundComponentComponentComponent } from './not-found-component-component/not-found-component-component.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path:"Product",component:ProductComponent},
  {path:"",redirectTo:"Product",pathMatch:"full"},
  {path:"emploi",component:OffresEmploiComponentComponent},
  {path:"article",component:ArticlesComponentComponentComponent},
  {path: "ProductForm" , component:AddProductComponentComponentComponent},

  {path:"**",component:NotFoundComponentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
