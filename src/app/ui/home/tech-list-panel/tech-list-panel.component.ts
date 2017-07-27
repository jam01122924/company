import { Component, OnInit, ElementRef } from '@angular/core';
import { slideIn } from '../../../common/shared/animation';

@Component({
  selector: 'app-tech-list-panel',
  templateUrl: './tech-list-panel.component.html',
  styleUrls: ['./tech-list-panel.component.scss'],
  animations: [slideIn]
})
export class TechListPanelComponent implements OnInit {
  state: string = 'none';
  verticalPosition: number[] = [];
  listPosition: number = 0;
  verticalPositionIncrease: number[] = [];
  techItemList = {};
  constructor(private _el: ElementRef) { }

  ngOnInit() {
 	  this.techItemList = {
      lv1: [
        {
         name: 'webdesign',
         positionX: 40,
         positionY: 40,
         size: 20,
        }
      ],
      lv2: [
        {
         name: 'angular',
         positionX: 15,
         positionY: 10,
         size: 18,
        }, 
        {
         name: 'react',
         positionX: 35,
         positionY: 45,
         size: 18,
        },
        {
         name: 'python',
         positionX: 55,
         positionY: 25,
         size: 18,
        },
        {
         name: 'java',
         positionX: 75,
         positionY: 65,
         size: 18,
        }
      ],
      lv3: [
        {
         name: 'js',
         positionX: 5,
         positionY: 75,
         size: 14,
        }, 
        {
         name: 'html5',
         positionX: 20,
         positionY: 12,
         size: 14,
        },
        {
         name: 'css',
         positionX: 35,
         positionY: 65,
         size: 14,
        },
        {
         name: 'jquery',
         positionX: 50,
         positionY: 25,
         size: 14,
        },
        {
         name: 'git',
         positionX: 65,
         positionY: 70,
         size: 14,
        },
        {
         name: 'angular2',
         positionX: 70,
         positionY: 35,
         size: 14,
        },
        {
         name: 'sql',
         positionX: 85,
         positionY: 65,
         size: 14,
        }
      ],
    };

    this.verticalPosition = [ 0, 0, 0];
    this.verticalPositionIncrease = [ 0.1, 0.15, 0.20];
    this.listPosition = this._el.nativeElement.getBoundingClientRect().top;
    setInterval(()=>{
      if(this.comparePosition()) {
        this.moveListItem();
      }
    }, 500);
  }

  comparePosition() {
    let temp = this.listPosition;
    this.listPosition = this._el.nativeElement.getBoundingClientRect().top;
    return temp !== this.listPosition;
  }

  toggleMove() {
    this.state = this.state==='in'?'out':'in';
  }

  moveListItem() {
    console.log(this.verticalPositionIncrease[2]*this.listPosition);
    this.verticalPosition = this.verticalPosition.map((p, i) => {
      return 10 + Math.floor( this.verticalPositionIncrease[i]*this.listPosition );
    });
    console.log(this.verticalPosition);
  }

}
