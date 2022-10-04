import { InputValidationsService } from '@/app/utils/inputValidations/input-validations.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let validationsService: InputValidationsService;
  const event = { key: 'X' } as KeyboardEvent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      providers: [InputValidationsService],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.name = 'name';
    component.color = 'primary';
    component.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    validationsService = TestBed.inject(InputValidationsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return the error word', () => {
    const form = component.form;
    form.get('name')?.markAsTouched();

    const color = component.getInputColor();
    expect(color).toBe('error');
  });
  it('should return the color value', () => {
    const form = component.form;
    form.get('name')?.setValue('name');
    form.get('name')?.markAsTouched();

    const color = component.getInputColor();
    expect(color).toBe(component.color);
  });
  it('should return the error word when the amount is invalid', () => {
    component.isInvalidAmount = true;
    const form = component.form;
    form.get('name')?.setValue('name');
    form.get('name')?.markAsTouched();

    const color = component.getInputColor();
    expect(color).toBe('error');
  });

  it('Should call the stringValidation function from the inputValidationService', () => {
    component.rule = 'string';
    const stringValidationSpy = spyOn(validationsService, 'stringValidation');
    component.validationValue(event);
    expect(stringValidationSpy).toHaveBeenCalledWith('X', event);
  });

  it('Should call the addressValidation function from the inputValidationService', () => {
    component.rule = 'address';
    const addressValidationSpy = spyOn(validationsService, 'addressValidation');
    component.validationValue(event);
    expect(addressValidationSpy).toHaveBeenCalledWith('X', event);
  });

  it('Should call the lengthValidation function from the inputValidationService', () => {
    component.rule = 'amount';
    component.length = '8'
    const addressValidationSpy = spyOn(validationsService, 'lengthValidation');
    component.validationValue(event);
    expect(addressValidationSpy).toHaveBeenCalledWith('X', component.length,event);
  });
  
  it('Should call the dpiValidation function from the inputValidationService and return false when the validationValue is called', () => {
    component.rule = 'dpi';
    const addressValidationSpy = spyOn(validationsService, 'dpiValidation').and.callFake(() => false);
    const resp = component.validationValue(event);
    expect(addressValidationSpy).toHaveBeenCalledWith('X', component.length);
    expect(resp).toBe(false)
  });
  it('Should call the dpiValidation function from the inputValidationService and return true then should call dpiFormat function and return the event', () => {
    component.rule = 'dpi';
    const addressValidationSpy = spyOn(validationsService, 'dpiValidation').and.callFake(() => true);
    const dpiFormatSpy = spyOn(component, 'dpiFormat')
    const resp = component.validationValue(event);
    expect(addressValidationSpy).toHaveBeenCalledWith('X', component.length);
    expect(dpiFormatSpy).toHaveBeenCalledTimes(1);
    expect(resp).toBe(event)
  });

  it('Should call the numberValidation function from the inputValidationService', () => {
    component.rule = 'number';
    component.length = '8'
    const numberValidationSpy = spyOn(validationsService, 'numberValidation');
    component.validationValue(event);
    expect(numberValidationSpy).toHaveBeenCalledWith('X', component.length, event);
  });
  
  it('Should call the phoneValidation function from the inputValidationService', () => {
    component.rule = 'phone';
    component.length = '8'
    const phoneValidationSpy = spyOn(validationsService, 'phoneValidation');
    component.validationValue(event);
    expect(phoneValidationSpy).toHaveBeenCalledWith('X', component.length, event);
  });
  it('Should return the event when the rule is inherit', () => {
    component.rule = 'inherit';
    const resp = component.validationValue(event);
    expect(resp).toEqual(event)
  });

  it('Should call the dpi format', () => {
    component.dpiFormat();
  })
});
