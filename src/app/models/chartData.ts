import { ChartDataPoint } from "./chartDataPoint";
import { ChartType } from "./chartType";

export class ChartData {
  
  innerRadius?: number;
  showInLegend?: boolean;
  color?: string;
  name?: string;

  constructor(
    public type: ChartType,
    public dataPoints: ChartDataPoint[]
  ){}

}
