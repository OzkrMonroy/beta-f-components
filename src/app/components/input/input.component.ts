import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputAutoComplete, InputColors, InputType } from 'src/app/types/input';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  form: FormGroup = this.formBuilder.group({
    ['default-name']: ['', Validators.required],
  });
  
  @Input() color: InputColors = 'primary';
  @Input() containerClasses: string = ''
  @Input() id: string = 'default-id'
  @Input() name: string = 'default-name'
  @Input() autoComplete: InputAutoComplete = 'off'
  @Input() type: InputType = 'text'
  @Input() lable: string = 'Default label'
  @Input() required: boolean = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  mustFloat() {
    return this.form.get(this.name)?.value !== '';
  }
}
