import { Injectable } from '@angular/core';
import { ChartDataPoint } from '../models/chartDataPoint';
import { Dayjs } from 'dayjs';
import { GenerateDataService } from './generateDataService.service';
import { Statistics } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pageViewsData: Map<string, ChartDataPoint[]> = new Map() //{dateRangeString : ChartDataPoint[]}
  mrrStatsByCountryData: Map<string, ChartDataPoint[]> = new Map() //{dateRangeString : ChartDataPoint[]}
  mrrData: Map<string, ChartDataPoint[]> = new Map() //{dateRangeString : ChartDataPoint[][]}
  stats: Map<string, Statistics> = new Map()
  selectedDateRangeLabel: string | undefined

  constructor(private generateDataService: GenerateDataService) { }

  setDateRangeLabel(startDate: Dayjs, endDate: Dayjs) {
    if (startDate && endDate) {
      let startDateLabel = startDate.toISOString().split('T')[0]
      let endDateLabel = endDate.toISOString().split('T')[0]
      this.selectedDateRangeLabel = `${startDateLabel} - ${endDateLabel}`
    }
  }

  getPageViews(): ChartDataPoint[] {
    if (this.selectedDateRangeLabel) {
      let data = this.pageViewsData.get(this.selectedDateRangeLabel)
      if (!data) {
        let dataPoints = this.generateDataService.getPageViewData()
        let chartDataPoints = dataPoints.map(dp => new ChartDataPoint(0, dp.y, 0, dp.label))
        this.pageViewsData.set(this.selectedDateRangeLabel, chartDataPoints)
        return chartDataPoints
      } else {
        return data
      }
    } else {
      throw console.error('No selected date range');
    }
  }

  getMRRStatsByCountry(): ChartDataPoint[] {
    if (this.selectedDateRangeLabel) {
      let data = this.mrrStatsByCountryData.get(this.selectedDateRangeLabel)
      if (!data) {
        let dataPoints = this.generateDataService.getMRRStatsByCountryData()
        let chartDataPoints = dataPoints.map(dp => new ChartDataPoint(dp.x, dp.y, dp.z, dp.label))
        this.mrrStatsByCountryData.set(this.selectedDateRangeLabel, chartDataPoints)
        return chartDataPoints
      } else {
        return data
      }
    } else {
      throw console.error('No selected date range');
    }
  }

  getMRR(): ChartDataPoint[]{
    if (this.selectedDateRangeLabel) {
      let data = this.mrrData.get(this.selectedDateRangeLabel)
      if (!data) {
        let dataPoints = this.generateDataService.getMRRData()
        let chartDataPoints = dataPoints.map(dp => new ChartDataPoint(dp.x, dp.y, 0, dp.label))
        this.mrrData.set(this.selectedDateRangeLabel, chartDataPoints)
        return chartDataPoints
      } else {
        return data
      }
    } else {
      throw console.error('No selected date range');
    }
  }

  getStats() {
    if (this.selectedDateRangeLabel) {
      let data = this.stats.get(this.selectedDateRangeLabel)
      if (!data) {
        let wins = this.generateDataService.getRandomInteger(1000)
        let winsUpBy = this.generateDataService.getRandomInteger(100)
        let trialRate = parseFloat(this.generateDataService.getRandomNumber(10).toPrecision(3))
        let trialRateUpBy = this.generateDataService.getRandomInteger(100)
        let mrr = this.generateDataService.getRandomInteger(100000)
        let mrrUpBy = parseFloat(this.generateDataService.getRandomNumber(10).toPrecision(2))
        data = new Statistics(wins, winsUpBy, trialRate, trialRateUpBy, mrr, mrrUpBy)
        this.stats.set(this.selectedDateRangeLabel, data)
      }
      return data
    } else {
      throw console.error('No selected date range');
    }
  }
}
