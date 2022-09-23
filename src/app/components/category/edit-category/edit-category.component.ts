import { Category } from './../../../Models/category';
import { ActivatedRoute, Route } from '@angular/router';
import { CategoryService } from './../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  category: Category = {
    _id: '',
    categoryName: '',
  };

  id = '';

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.categoryService.getCategoryById(this.id).subscribe((cat) => {
      this.category = cat;
    });
  }
}
