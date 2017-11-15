import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ChartsDemoComponent } from './d3-charts-demo.component';

describe('D3ChartsDemoComponent', () => {
  let component: D3ChartsDemoComponent;
  let fixture: ComponentFixture<D3ChartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ChartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ChartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
