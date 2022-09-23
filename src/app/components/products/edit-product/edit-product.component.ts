import { Category } from './../../../Models/category';
import { CategoryService } from './../../../Services/category.service';
import { ProductService } from './../../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  productId: any;

  selected: any;

  product: Product = {
    _id: '',
    productName: '',
    productPrice: 0,
    productDescription: '',
    productType: '',
    productImg: '',
  };

  categoriesDropDownData: Category[] = [
    {
      _id: '',
      categoryName: '',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });

    this.productService
      .getProductFromId(this.productId)
      .subscribe((product) => {
        this.product = product;
        this.selected = this.product.productType;
      });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categoriesDropDownData = categories;
    });
  }

  updateProduct() {
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe((p) => {
        console.log(p);
        this.router.navigateByUrl('/');
      });
  }

  mostraselected(){
    console.log(this.selected)
  }
}
