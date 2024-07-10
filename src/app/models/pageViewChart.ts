import { Chart } from "./chart"
import { ChartDataPoint } from "./chartDataPoint";
import { ChartType } from "./chartType";

export class PageViewChart extends Chart {
  
  constructor(dataPoints: ChartDataPoint[]) {
    super();
    this.data = [{
      type: ChartType.DOUGHNUT,
      innerRadius: 30,
      dataPoints: dataPoints
    }];
  }  
}
