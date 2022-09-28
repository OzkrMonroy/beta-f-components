import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputAutoComplete, InputColors, InputRules, InputType } from 'src/app/types/input';

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
  @Input() containerClasses: string = ''
  @Input() lable: string = 'Default label'

  @Input() type: InputType = 'text'
  @Input() id: string = 'default-id'
  @Input() name: string = 'default-name'
  @Input() autoComplete: InputAutoComplete = 'off'
  @Input() required: boolean = false;
  @Input() length: string = '50'
  @Input() rule: InputRules = 'inherit'

  constructor(private readonly formBuilder: FormBuilder) {}

  mustFloat() {
    return this.form.get(this.name)?.value !== '';
  }
}
