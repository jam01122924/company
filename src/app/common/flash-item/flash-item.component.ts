import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flash-item',
  templateUrl: './flash-item.component.html',
  styleUrls: ['./flash-item.component.scss']
})
export class FlashItemComponent implements OnInit {
  title: string = '';
  currWord: string = '';
  wordArray: string[] = [];
  speedArray: number[] = [];
  index: number = 0;
  speed: number = 1;
  play: boolean = false;
  timeout: number = 1000;
  @Input() content: string;
  @Input() repeat: boolean;
  constructor() { }

  ngOnInit() {
    this.title = 'How Fast Can People Remember Your Business?';
    this.currWord = 'START';
    this.wordArray = this.content.split(' ');
    this.speedArray = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
    this.speed = 1;
    this.timeout = Math.floor(60000/this.speedArray[this.speed]);
  }

  reset() {
    this.index = 0;
    this.speed = 1;
    this.play = false;
    this.timeout = Math.floor(60000/this.speedArray[this.speed]);
  }
  BackToBeginning() {
    this.index = 0;
    this.currWord = this.wordArray[this.index];
  }
  adjustSpeed(speed) {
    this.speed = speed>=0&&speed<this.speedArray.length?speed:this.speed;
    this.timeout = Math.floor(60000/this.speedArray[this.speed]);
  }
  adjustIndex(i) {
    this.index = i>=0&&i<this.wordArray.length?i:this.index;
  }

  stop() {
    this.play = false;
  }
  start() {
    if(!this.play) {
      this.play = true;
      this.index = this.index>=this.wordArray.length?0:this.index;
      this.renderText();
    }
  }

  renderText() {
    if(this.play){
      this.currWord = this.wordArray[this.index];
      this.index++;
      if(this.index===this.wordArray.length && this.repeat) {
        this.index = 0;
      }
      if(this.index<this.wordArray.length) {
        setTimeout(()=> {
          this.renderText();
        }, this.timeout);
      }else{
        this.play = false;
      }
    }

  }

}
