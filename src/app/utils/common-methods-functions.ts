export function removeComma(value: string): string {
  value = value.replace(/,/g, '');
  value = value.split('.')[0];
  return value;
}

export function removeQ(value: string): number {
  return Number.parseFloat(removeComma(value).replace(/Q/g, '').trim());
}
export function removePercentage(value: string): number {
  let valueNumber = Number.parseFloat(value.replace(/%/g, '').trim());

  return Number.isNaN(valueNumber) ? 0 : valueNumber;
}

export function isEmpty(value: string): string | null {
  let valueAux: boolean = value === '';
  return valueAux ? null : value;
}
