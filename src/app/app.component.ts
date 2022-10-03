import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  amountStep: number = 1000;
  title = 'financial-prev-components';
  form: FormGroup = this.formBuilder.group({
    ['name']: ['', Validators.required],
    ['amount']: ['', [Validators.maxLength(8), Validators.required]],
    ['dpi']: ['', [Validators.required, Validators.maxLength(15)]],
    ['phone']: ['', [Validators.required, Validators.maxLength(8)]],
  });
  isInvalidAmount: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.changeFormValue();
  }

  changeFormValue(): void {
    this.form
      .get('amount')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((data: any) => {
        const clearValue = data
          .replace(/\s/g, '')
          .replace(/Q/g, '')
          .replace(/,/g, '');

        this.isInvalidAmount = Number(clearValue) % this.amountStep !== 0;
      });
  }
}
