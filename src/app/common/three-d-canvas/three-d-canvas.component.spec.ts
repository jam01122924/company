import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCanvasComponent } from './three-d-canvas.component';

describe('ThreeDCanvasComponent', () => {
  let component: ThreeDCanvasComponent;
  let fixture: ComponentFixture<ThreeDCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
