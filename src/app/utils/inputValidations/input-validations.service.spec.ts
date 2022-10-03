import { TestBed } from '@angular/core/testing';

import { InputValidationsService } from './input-validations.service';

describe('InputValidationsService', () => {
  let service: InputValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("[stringValidation - success] should return the event when the value pass the regex validation", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.stringValidation('Hello', event)
    expect(resp).toEqual(event)
  })
  it("[stringValidation - error] should return false when the value does not pass the regex validation", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.stringValidation('Hell@', event)
    expect(resp).toBe(false);
  })
  
  it("[addressValidation - success] should return the event when the value pass the regex validation", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.addressValidation('test@test.com', event)
    expect(resp).toEqual(event)
  })
  it("[addressValidation - error] should return false when the value does not pass the regex validation", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.addressValidation('test', event)
    expect(resp).toBe(false);
  })
  
  it("[numberValidation - success] should return the event when the value is a number and the length is correct", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.numberValidation('20', '2', event)
    expect(resp).toEqual(event)
  })
  it("[numberValidation - error] should return false when the value is not a number", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.numberValidation('a','1', event)
    expect(resp).toEqual(false);
  })
  it("[numberValidation - error] should return false when the length value is major to the length sent", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.numberValidation('12','1', event)
    expect(resp).toEqual(false);
  })
  
  it("[dpiValidation - success] should return the true when the value pass the regex validation", () => {
    const resp = service.dpiValidation('2020578493823', '13')
    expect(resp).toBeTruthy()
  })
  it("[dpiValidation - error] should return false when the value does not pass the regex validation", () => {
    const resp = service.dpiValidation('abcdefghplofi', '13')
    expect(resp).toBeFalsy()
  })

  it("[lengthValidation - success] should return the event when the length value is minor or equal to the length sent as a parameter", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.lengthValidation('20', '2', event)
    expect(resp).toEqual(event)
  })
  it("[lengthValidation - error] should return false when the length value is major to the length sent as a parameter", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.lengthValidation('20','1', event)
    expect(resp).toBe(false);
  })
  
  it("[phoneValidation - success] should return the event when the value is a correct phone number", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.phoneValidation('50572344', '8', event)
    expect(resp).toEqual(event)
  })
  it("[phoneValidation - error] should return false when the value is not a correct phone number", () => {
    const event = { key: '' } as KeyboardEvent;
    const resp = service.phoneValidation('123456789','8', event)
    expect(resp).toBe(false);
  })
});
