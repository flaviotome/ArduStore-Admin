import { CategoryService } from './../../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  category: Category = {
    _id: '',
    categoryName: '',
  };

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {}

  addCategory() {
    this.categoryService.postCategory(this.category).subscribe((retorno) => {
      console.log(retorno);
      this.router.navigateByUrl("/category")
    });
  }
}
