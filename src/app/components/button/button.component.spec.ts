import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return the classes for primary button', () => {
    component.buttonColor = 'primary';
    const color = component.getClasses()
    expect(color).toEqual(component.buttonColors.primary)
  })
  
  it('Should return the classes for secondary button', () => {
    component.buttonColor = 'secondary';
    const color = component.getClasses()
    expect(color).toEqual(component.buttonColors.secondary)
  })
  it('Should return the classes for outlined button', () => {
    component.buttonColor = 'outlined';
    const color = component.getClasses()
    expect(color).toEqual(component.buttonColors.outlined)
  })
});
