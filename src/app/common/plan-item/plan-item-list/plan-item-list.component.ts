import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-item-list',
  templateUrl: './plan-item-list.component.html',
  styleUrls: ['./plan-item-list.component.scss'],
  inputs: ['listData']
})
export class PlanItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
