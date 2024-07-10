import { Chart } from "./chart"
import { ChartData } from "./chartData";
import { ChartDataPoint } from "./chartDataPoint";
import { ChartType } from "./chartType";

export class MRRStatsByCountryChart extends Chart {

  constructor(dataPoints: ChartDataPoint[]) {
    super();
    
    this.axisX = {
      ...this.axisX,
      prefix:'$',
      interval: 10,
      intervalType: "number",
      labelFormatter:function (e: any) {
        return e.value;
      },
    }
    
    this.axisY = {
      ...this.axisY,
      prefix:'$',
      includeZero: true
    }

    this.setData(dataPoints);
  }  

  setData(dataPoints: ChartDataPoint[]) {
    let transformedDataPoints = new Map<string, ChartDataPoint[]>();
    //Here we are collecting all data points with same label
    dataPoints.forEach(dp => {
      let dps = transformedDataPoints.get(dp.label)
      if (!dps) {
        transformedDataPoints.set(dp.label, [dp])
      } else {
        dps.push(dp)
      }
    })
    this.data = [];
    transformedDataPoints.forEach(dps => {
      let chartData = new ChartData(ChartType.BUBBLE, dps)
      chartData.name = '{label}'
      chartData.showInLegend = true
      this.data.push(chartData)
    });
  }
}
