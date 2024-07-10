import { ChartData } from "./chartData"

export class Chart {
  
  animationEnabled = true
  responsive = true
  axisX: any = { gridThickness : 0, labelFontColor: "#c9c7c7", tickLength: 0, lineColor: "#c9c7c7", interval: "number"}
  axisY: any = { gridThickness : 0, labelFontColor: "#c9c7c7", tickLength: 0, lineColor: "#c9c7c7"}
  data: any[] = []

}
