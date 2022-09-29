import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'financial-prev-components';
  form: FormGroup = this.formBuilder.group({
    ['name']: ['', Validators.required],
    ['amount']: ['', [Validators.maxLength(8)]],
    ['dpi']: ['', [Validators.required, Validators.maxLength(15)]],
    ['phone']: ['', [Validators.required, Validators.maxLength(8)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder
  ) {}
}
