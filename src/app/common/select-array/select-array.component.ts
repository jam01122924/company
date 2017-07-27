import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SelectArrayService } from '../../services/selectArray.service';

@Component({
  selector: 'app-select-array',
  templateUrl: './select-array.component.html',
  styleUrls: ['./select-array.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectArrayComponent implements OnInit {
  currIndex: number;
  @Input() currName: string = 'websiteType';
  @Input() color: string = '#EEEEEE';
  @Input() type: string = 'selection';
  data: any;
  constructor(private _ss: SelectArrayService) {
  }

  minus() {
    this.currIndex--;
    this.currIndex = this.currIndex<0?0:this.currIndex;
    this.updateSelectArrayService();
  }

  plus() {
    this.currIndex++;
    this.currIndex = (this.data&&this.data.value&&this.currIndex>=this.data.value.length)?(this.data.value.length - 1):this.currIndex;
    this.updateSelectArrayService();
  }

  updateSelectArrayService() {
    if(this.type==='selection'){
      this._ss.setSelection(this.currName, this.currIndex);
    } else if (this.type==='plan'){
      this._ss.setPlan(this.currName, this.currIndex);
    }
  }

  ngOnInit() {
    if(this.type==='selection') {
      this.data = this._ss.getSelectionData(this.currName);
      this.currIndex = this.data.selection;
    }else if(this.type==='plan'){
      this.data = this._ss.getPlanData(this.currName);
      this.currIndex = this.data.selection;
    }
  }

}
