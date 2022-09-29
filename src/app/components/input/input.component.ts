import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InputAutoComplete,
  InputColors,
  InputRules,
  InputType,
} from 'src/app/types/input';
import { InputValidationsService } from '@/app/utils/inputValidations/input-validations.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  //TODO: delete this later
  form: FormGroup = this.formBuilder.group({
    ['default-name']: ['', Validators.required],
  });

  @Input() color: InputColors = 'primary';
  @Input() containerClasses: string = '';
  @Input() lable: string = 'Default label';

  @Input() type: InputType = 'text';
  @Input() id: string = 'default-id';
  @Input() name: string = 'default-name';
  @Input() autoComplete: InputAutoComplete = 'off';
  @Input() required: boolean = false;
  @Input() length: string = '50';
  @Input() rule: InputRules = 'inherit';

  @ViewChild('inputRef') inputElement!: ElementRef;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly inputValidations: InputValidationsService
  ) {}

  validationValue(event: KeyboardEvent): boolean | KeyboardEvent {
    const { value } = this.inputElement.nativeElement;
    const valueWord = `${value}${event.key}`;

    if (this.rule === 'string') {
      return this.inputValidations.stringValidation(valueWord, event);
    }
    if (this.rule === 'address') {
      return this.inputValidations.addressValidation(valueWord, event);
    }
    if (this.rule === 'amount') {
      return this.inputValidations.amountValidation(
        valueWord,
        this.length,
        event
      );
    }
    if (this.rule === 'number') {
      return this.inputValidations.numberValidation(
        valueWord,
        this.length,
        event
      );
    }

    return event;
  }

  mustFloat() {
    return this.form.get(this.name)?.value !== '';
  }
}
