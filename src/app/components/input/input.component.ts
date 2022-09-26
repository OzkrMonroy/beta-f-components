import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });
  
  @Input() color: string = 'primary';
  constructor(private readonly formBuilder: FormBuilder) {}

  mustFloat() {
    return this.form.get('name')?.value !== '';
  }
}
