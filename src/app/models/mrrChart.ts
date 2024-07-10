import { CanvasJS } from "@canvasjs/angular-charts";
import { Chart } from "./chart"
import { ChartData } from "./chartData";
import { ChartDataPoint } from "./chartDataPoint";
import { ChartType } from "./chartType";
import { ChartColor } from "./chartColors";

export class MRRChart extends Chart {

  constructor(dataPoints: ChartDataPoint[]) {
    super();

    this.axisX = {
      ...this.axisX,
      interval: 2,
      labelFormatter: function (e: any) {
        let prevDate = new Date(e.value)
        let prevLabel = new Date(prevDate.setMonth((e.value.getMonth() - 1) % 12))
        return `${CanvasJS.formatDate(prevLabel, "MMM")} - ${CanvasJS.formatDate(e.value, "MMM")}`;
      },
      intervalType: "month",      
    }

    this.axisY = {
      ...this.axisY,
      interval: 10,
      gridThickness: 1,
      prefix: '$',
      suffix: 'K',
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
    let index = 0;
    transformedDataPoints.forEach((dps, label) => {
      let chartData = new ChartData(ChartType.STACKED_COLUMN, dps)
      chartData.name = '{label}'
      const color = ChartColor[index++]
      if (color) {
        chartData.color = color
      }
      this.data.push(chartData)
    })
  }
}
