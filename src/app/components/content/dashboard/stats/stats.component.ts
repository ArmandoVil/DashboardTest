import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { Category } from 'src/app/data/models/category';
import { ApiFacadeService } from 'src/app/services/api-facade.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  allCategories$: Observable<Category[]>;
  allCategoriestest: Category[];
  public chartLabels = [];
  public chartData = [];
  public polarAreaChartColors: Array<any>;

  constructor(private apiFacade: ApiFacadeService) {    
    this.polarAreaChartColors = [
      {
        backgroundColor: [
          'rgba(11, 14, 128, 0.6)',
          'rgba(100, 190, 135, 0.6)',
          'rgba(14, 154, 200, 0.6)',
          'rgba(100, 90, 35, 0.6)'
        ],
      }
    ];
   }

  ngOnInit(): void {
    this.allCategories$ = this.apiFacade.getCategories();
    this.allCategories$.subscribe(categories => {
      categories.forEach(cat => {
        this.chartLabels.push(cat.category);
        this.chartData.push(cat.numberOfProducts);
      });
    });
  }

}
