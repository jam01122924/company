import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashItemComponent } from './flash-item.component';

describe('FlashItemComponent', () => {
  let component: FlashItemComponent;
  let fixture: ComponentFixture<FlashItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
