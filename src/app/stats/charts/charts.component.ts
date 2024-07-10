import { Component, Input, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { Chart } from 'src/app/models/chart';

@Component({
  selector: 'stats-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() chartId: number = Math.random();
  @Input() chart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.renderChart()
  }

  ngAfterViewInit(): void {
    this.renderChart()
  }

  renderChart() {
    let el = document.getElementById('chart' + this.chartId)
    if (el && this.chart) {
      var chartEl = new CanvasJS.Chart('chart' + this.chartId, this.chart);
      chartEl.render();
    }
  }
}

