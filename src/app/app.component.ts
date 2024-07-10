import { Component } from '@angular/core';
import { DataService } from './services/dataService.service';
import { PageViewChart } from './models/pageViewChart';
import { MRRStatsByCountryChart } from './models/mrrByCountryChart';
import { MRRChart } from './models/mrrChart';
import { ChartDataPoint } from './models/chartDataPoint';
import * as dayjs from 'dayjs';
import { Statistics } from './models/statistics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 1, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'yellow',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [0, 1, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'orange',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: [0, 3, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'blue',
        stack: 'Stack 1',
      },
      {
        label: 'Dataset 3',
        data: [0, -4, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'green',
        stack: 'Stack 1',
      }
    ]
  };

  pageView: PageViewChart | undefined
  mrrStatsByCountry: MRRStatsByCountryChart | undefined
  mrr: MRRChart | undefined
  stats = new Statistics()

  selectedDate = { startDate: dayjs(), endDate: dayjs() }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.datesUpdated(this.selectedDate)
  }

  setPageViewsChart() {
    let dataPoints = this.dataService.getPageViews()
    this.pageView = new PageViewChart(dataPoints)
  }

  setMRRStatsByCountryChart() {
    let dataPoints = this.dataService.getMRRStatsByCountry()
    this.mrrStatsByCountry = new MRRStatsByCountryChart(dataPoints)
  }

  setMRR() {
    let dataPoints: ChartDataPoint[] = this.dataService.getMRR()
    this.mrr = new MRRChart(dataPoints)
  }

  setStats() {
    this.stats = this.dataService.getStats()
  }

  datesUpdated(date: any) {
    this.selectedDate = date;
    this.dataService.setDateRangeLabel(date.startDate, date.endDate)
    this.updateData()
  }

  updateData() {
    this.setMRR()
    this.setMRRStatsByCountryChart()
    this.setPageViewsChart()
    this.setStats()
  }
}
