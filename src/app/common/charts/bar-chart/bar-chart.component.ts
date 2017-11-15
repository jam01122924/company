import { Component, OnInit, OnChanges, Input, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any> = [[0, 1],[1, 25],[2, 5],[3, 5],[4, 5],[5, 5]];

  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    console.log('!!!')
    if(this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    console.log(this.data)
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    this.chart = d3.select(element)
      .selectAll("div")
      .data(this.data)
        .enter()
        .append("div")
          .attr('class', ()=>'bar')
          .style('width', d=>d[1]*4 +'px')
          .style('background-color', 'red')
          .style('margin', '4px')
          .text(d=>d[1]);
  }

  updateChart() {
    let element = this.chartContainer.nativeElement;
    // update scales & axis
    this.chart = d3.select(element)
      .selectAll("div")
      .data(this.data)
        .enter()
        .append("div")
          .attr('class', ()=>'bar')
          .style('width', d=>d[1]*4 +'px')
          .style('background-color', 'red')
          .style('margin', '4px')
          .text(d=>d[1]);
  }

}
