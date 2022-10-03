import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AmountValidationsService {

  verifyAmount(field: string, amountStep: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = String(control.get(field)?.value || '')
        .replace(/\s/g, '')
        .replace(/Q/g, '')
        .replace(/,/g, '');
      if (Number(value) % amountStep) {
        return null;
      }
      return { invalidAmount: true };
    };
  }
}
