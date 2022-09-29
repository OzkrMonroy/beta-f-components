import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { removeComma } from '@/app/utils/common-methods-functions';
import { FormatNumberPipe } from '@/app/pipes/format-number.pipe';

@Directive({
  selector: '[appFormatNumber]',
  providers: [FormatNumberPipe],
})
export class FormatNumberDirective {
  @Output() errorMax: EventEmitter<{ valid: boolean; value: string }> =
    new EventEmitter();
  @Input() max: number = 0;

  constructor(private pipeFormatNumber: FormatNumberPipe) {}

  @HostListener('keypress', ['$event'])
  addZero(event: KeyboardEvent) {
    const regex = /^\d/g;

    if (!regex.test(event.key)) {
      return false;
    } else {
      return event;
    }
  }
  @HostListener('input', ['$event'])
  change(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target === null) return;
    const posStart = target.selectionStart || 0;
    const posEnd = target.selectionEnd || 0;
    target.value = target.value.toString().replace(/\s/g, '').replace(/Q/g,'');
    const oldLength = target.value.toString().split(',').length - 1;

    target.value = this.pipeFormatNumber.transform(
      target.value.toString().replace(/\,/gi, '')
    );
    
    this.errorMax.emit({
      valid: this.validInput(target.value),
      value: target.value,
    });

    const newLength = target.value.toString().split(',').length + 1;
    let offset = newLength - oldLength;

    target.value = target.value.toString().trim() !== '' ? `Q ${target.value}` : target.value
    
    target.selectionStart = +posStart + (posStart + offset < 0 ? 0 : offset);
    target.selectionEnd = +posEnd + (posEnd + offset < 0 ? 0 : offset) + 1;
  }

  validInput(value: string): boolean {
    if (Number.parseFloat(removeComma(value)) > this.max) {
      return false;
    }
    return true;
  }
}
