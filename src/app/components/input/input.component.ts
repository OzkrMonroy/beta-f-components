import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  placeholderClasses = 'text-cyan-400';
  inputClasses: string = 'border-cyan-400 focus:border-violet-500';
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });
  constructor(private readonly formBuilder: FormBuilder) {}

  mustFloat() {
    return this.form.get('name')?.value !== '';
  }
}
