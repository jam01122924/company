import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.scss'],
  inputs: ['title', 'planData']
})
export class PlanItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
