import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList: any;
  displayedColumns = ['image', 'name', 'price','type', 'actions'];
  dataSource: any;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products) => {
      this.productsList = products;
      this.dataSource = products;
    });
  }

  ngOnInit(): void {}
}
