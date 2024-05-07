import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products: Product[] = [];
  productSelected: Product = new Product();

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(prod => this.products = prod);
  }

  addProduct(product: Product): void{
    if(product.id > 0){
      this.service.update(product).subscribe(productUpdated => {

        this.products = this.products.map(prod => {
          if(prod.id == product.id){
            return {...productUpdated};
          }
          return prod;
        });

      });
    }else{
      this.service.create(product).subscribe(newProduct => {
        this.products.push({...newProduct});
      //this.products = [...this.products, {...newProduct}];
      });
      //product.id = new Date().getTime();
      //this.products.push(product);
      //this.products = [...this.products, {...product}];
    }
    this.productSelected = new Product();
  }

  //Edición
  onUpdateProduct(productRow: Product): void{
    this.productSelected = {...productRow};
  }

  //remove
  onRemoveProduct(id: number): void{
    this.service.remove(id).subscribe(() => {
      this.products = this.products.filter(prod => prod.id != id);
    });
  }

}
