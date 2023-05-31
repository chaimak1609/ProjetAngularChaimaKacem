import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({ //pour indiquer que c'est un service 
  providedIn: 'root'//c'est a dire service accessible dans toute l'application  sin non dans appmodule j'ajoute dans providers le service
})
export class ProductService {
 
  listProductFromService=[
   
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'},
 {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'},
{id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'}, ]
   
 

  constructor() { }
  addProduct(p:Product){
    this.listProductFromService.push(p);
  }
}
