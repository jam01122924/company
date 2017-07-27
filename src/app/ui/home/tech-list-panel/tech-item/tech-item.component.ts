import { Component, OnInit } from '@angular/core';
import { verticalMove } from './tech-item.animation';

@Component({
  selector: 'app-tech-item',
  templateUrl: './tech-item.component.html',
  styleUrls: ['./tech-item.component.scss'],
  animations: [verticalMove],
  inputs: ['techItem', 'verticalPosition', 'lv']
})
export class TechItemComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
