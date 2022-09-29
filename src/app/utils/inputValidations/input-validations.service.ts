import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputValidationsService {
  stringValidation(
    valueToValidate: string,
    event: KeyboardEvent
  ): KeyboardEvent | boolean {
    const regex = /^(([a-záéíóúÑäëïöü\'0-9])|( ))+$/gi;
    if (!regex.test(valueToValidate)) {
      return false;
    } else {
      return event;
    }
  }

  addressValidation(
    valueToValidate: string,
    event: KeyboardEvent
  ): KeyboardEvent | boolean {
    const regex = /^(([a-záéíóúÑäëïöü\,\.\-'0-9])|( ))+$/gi;
    const regex2 = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/gi;
    if (!regex.test(valueToValidate) && regex2.test(valueToValidate)) {
      return false;
    } else {
      return event;
    }
  }

  numberValidation(
    valueToValidate: string,
    length: string,
    event: KeyboardEvent
  ): KeyboardEvent | boolean {
    const regex = /^\d+$/g;
    if (valueToValidate.length > parseInt(length)) {
      return false;
    }
    if (!regex.test(valueToValidate)) {
      return false;
    } else {
      return event;
    }
  }

  amountValidation(
    valueToValidate: string,
    length: string,
    event: KeyboardEvent
  ): KeyboardEvent | boolean {
    if (valueToValidate.length > parseInt(length)) {
      return false;
    }
    return event;
  }
}
