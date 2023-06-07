import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';
import { ProductConsumerService } from '../services/product-consumer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
listProducts:Product[]=[];
  constructor(private _productService :ProductService,private _consumer:ProductConsumerService) { }

  ngOnInit(): void {
    //this.listProducts=this._productService.listProductFromService;
    //this.listProducts=[
     // {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'},
      //{id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'},
      //{id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:'https://celio.tn/t-shirt-col-rond-100-coton-tebase-pine-green-01.html'}, ]
  this._consumer.getProducts().subscribe(
    {
      next:(data)=>{this.listProducts=data},
      error:(error)=>console.log(error),
      complete:()=>console.log('done') 
    }
  );
  
  
  
    }



buy(pro:Product){
  pro.quantity--;
}
delete(id:number){
  this._consumer.deleteProduct(id).subscribe(
    {
      next:()=>this.listProducts=this.listProducts.filter(p=>p.id !=id)
    }
  );
}
}
