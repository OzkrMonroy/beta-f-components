import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAlertsComponent } from './input-alerts.component';

describe('InputAlertsComponent', () => {
  let component: InputAlertsComponent;
  let fixture: ComponentFixture<InputAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
