import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-charts-demo',
  templateUrl: './d3-charts-demo.component.html',
  styleUrls: ['./d3-charts-demo.component.scss']
})
export class D3ChartsDemoComponent implements OnInit {
  chartList: string[] = [];
  currentChart: number = 0;
  chartData: any[] = [];
  intervalRef : any;

  constructor() { }

  ngOnInit() {
    this.chartList = ["Bar Chart", "Pie Chart", "Line Chart"];
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();
    }, 1000);
  }
  generateData() {
    console.log('generateData')
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  startDataGeneration() {
    this.stopDataGeneration();
    this.generateData();
    this.intervalRef = setInterval(() => this.generateData(), 3000);
  }

  stopDataGeneration() {
    clearInterval(this.intervalRef);
  }


  chartSelect(num) {
    this.currentChart = num;
  }
}
