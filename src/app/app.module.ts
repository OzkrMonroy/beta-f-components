import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormatNumberDirective } from './directives/format-number.directive';
import { InputAlertsComponent } from './components/input-alerts/input-alerts.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ButtonComponent, FormatNumberDirective, InputAlertsComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}