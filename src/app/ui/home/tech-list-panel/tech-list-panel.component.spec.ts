import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechListPanelComponent } from './tech-list-panel.component';

describe('TechListPanelComponent', () => {
  let component: TechListPanelComponent;
  let fixture: ComponentFixture<TechListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
