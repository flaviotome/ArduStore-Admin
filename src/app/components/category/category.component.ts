import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  displayedColumns = ['name', 'actions'];
  dataSource: any;
  durationInSeconds = 5;

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((c) => {
      console.log(c);
      this.dataSource = c;
    });
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe((retorno) => {
      this.categoryService.getCategories().subscribe((c) => {
        this.dataSource = c;
      });
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(CategoryComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
