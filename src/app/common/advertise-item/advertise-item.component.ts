import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertise-item',
  templateUrl: './advertise-item.component.html',
  styleUrls: ['./advertise-item.component.scss'],
  inputs: ['w']
})
export class AdvertiseItemComponent implements OnInit {
  private _renderTextLine: number;
  private _currText: string[];

  constructor() { }
  @Input() item: any;
  @Input() w: number;
  ngOnInit() {
    this._currText = [''];
    if(this.item.renderText && this.item.text && this.item.text.length>0) {
      this._renderTextLine = 0;
      this.renderText(this.item.text[0], 0);
    }
    if(!this.item.renderText) {
      this._currText = this.item.text;
    }
  }

  renderText(txt: string, index?: number) {
    index = index?index:0;

    if (!txt || this._renderTextLine<0 || this._renderTextLine>=this.item.text.length){
      return;
    }
    else {
      this._currText[this._renderTextLine] += txt[index];
      if(this._currText[this._renderTextLine] === txt) {
        this._renderTextLine++;
        if(this._renderTextLine<this.item.text.length) {
          this._currText[this._renderTextLine] = '';
          setTimeout(()=> {
            this.renderText(this.item.text[this._renderTextLine], 0);
          }, 800);
        }
        return
      } else{
        setTimeout(()=> {
          this.renderText(txt, ++index);
        }, 50);
      }
    }
  }

}
