import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  advertiseItemArray: Array<Object> = [{}];
  planItemArray: Array<Object> = [{}];
  constructor(private _vs: ValueService) { }

  ngOnInit() {
    if(this._vs&&this._vs.pages&&this._vs.pages.plans){
      this.advertiseItemArray = this._vs.pages.plans.advertiseItemArray;
      this.planItemArray = this._vs.pages.plans.planArray;
    }
  }

}
