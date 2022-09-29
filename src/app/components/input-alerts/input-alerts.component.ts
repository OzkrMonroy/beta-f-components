import { InputRules } from '@/app/types/input';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-alerts',
  templateUrl: './input-alerts.component.html',
  styleUrls: ['./input-alerts.component.scss']
})
export class InputAlertsComponent {
  @Input() parentForm!: FormGroup;
  @Input() rule: InputRules = 'inherit'
  @Input() name: string = ''

}
