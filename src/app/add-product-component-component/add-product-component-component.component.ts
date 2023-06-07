import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { ProductConsumerService } from '../services/product-consumer.service';

@Component({
  selector: 'app-add-product-component-component',
  templateUrl: './add-product-component-component.component.html',
  styleUrls: ['./add-product-component-component.component.css']
})
export class AddProductComponentComponentComponent implements OnInit {
product:Product=new Product();
  constructor(private _productServices:ProductService, private _router:Router,private _consumer:ProductConsumerService) { }

  ngOnInit(): void {
  }
  Add(){
    console.log(this.product) 
    //let index =this._productServices.listProductFromService.length;
    //this.product.id=this._productServices.listProductFromService[index-1]!.id+1;
    this.product.like=0;
    //this._productServices.addProduct(this.product);
    //this._router.navigate(['/Product']);
    this._consumer.addProduct(this.product).subscribe(
{
  next:()=>{this._router.navigate(['Product'])},
}
    )
  }

}
