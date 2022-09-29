import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: string): string {
    let valueReturn: string = '';
    let numberParse: number = 0;
    numberParse = Number.parseFloat(this.removeComma(`${value}`));
    if (!Number.isNaN(numberParse)) {
      valueReturn = new Intl.NumberFormat('es-GT')
        .format(numberParse)
    }

    return valueReturn;
  }

  removeComma(value: string): string {
    value = value.replace(/,/g, '');
    value = value.split('.')[0];
    return value;
  }
}
