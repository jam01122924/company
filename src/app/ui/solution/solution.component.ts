import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { ValueService } from '../../services/value.service';
import { SelectArrayService } from '../../services/selectArray.service';

enum ContentType {
    select,
    plan,
    price
}

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  w: number;
  h: number;
  advertiseItemArray: Array<Object> = [{},{}];
  selectArray: Array<string> = [];
  planArray: Array<string> = [];
  selectArrayColor: Array<string> = [];
  specArray: Array<Object> = [];
  showContent: ContentType = ContentType.select;

  constructor(private _ds: DeviceService, private _vs: ValueService, private _ss: SelectArrayService) { }

  ngOnInit() {
    this._ds.height$.subscribe(data => this.h = data);
    this._ds.width$.subscribe(data => this.w = data);

    if(this._vs&&this._vs.pages&&this._vs.pages.solution){
      this.advertiseItemArray = this._vs.pages.solution.advertiseItemArray;
      this.specArray = this._vs.pages.solution.specArray;
    }
    this.selectArray = [
      'websiteType',
      'websitePages',
      'targetAudience',
      'dataRequirement',
      'designLayout',
      'mainPurpose'
    ];
    this.planArray = [
      'numberOfPage',
      'design',
      'SEO',
      'ResponsiveDesign',
      'Database',
      'functionality',
      'CMS'
    ];
    this.selectArrayColor = [
      '#e51414',
      '#f2ab29',
      '#8df128',
      '#37fce8',
      '#2138ed',
      '#e51fef'
    ]
  }

  calcResult() {
    this._ss.calcPlan();
    this.showContent = ContentType.plan;
  }
  repickChoice() {
    this._ss.resetPlan();
    this.showContent = ContentType.select;
  }
  getPrice() {
    this._ss.calcPrice();
    this.showContent = ContentType.price;
  }
}
