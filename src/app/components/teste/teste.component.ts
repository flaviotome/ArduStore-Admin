import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  dtpoints = [{ label: '', y: 0 }];

  category: Category[] = [
    {
      _id: '',
      categoryName: '',
    },
  ];

  chart: any;

  chartOptions = {
    title: {
      text: 'Angular Column Chart',
    },
    animationEnabled: true,
    data: [
      {
        type: 'column',
        dataPoints: this.dtpoints,
      },
    ],
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      this.category = cat;

      this.category.forEach((element) => {
        this.dtpoints.push({ label: element.categoryName, y: 5 });
      });

      this.chartOptions.data[0].dataPoints = this.dtpoints;
    });
  }
}
  