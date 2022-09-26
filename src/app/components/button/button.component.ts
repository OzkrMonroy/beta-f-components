import { Component, Input } from '@angular/core';
import { ButtonColor, ButtonType } from 'src/app/types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent{

  @Input() label: string = 'Default label';
  @Input() type: ButtonType = 'button';
  @Input() containerClasses: string = ''
  @Input() buttonColor: ButtonColor = 'secondary'

  getClasses(): string{
    switch (this.buttonColor) {
      case 'secondary':
        return 'bg-sky-800 text-white hover:bg-sky-500'
      case 'outlined':
        return 'bg-sky-800 text-white border-[2px] border-white border-solid hover:bg-white hover:text-sky-800 hover:border-sky-800'
      default:
        return 'bg-amber-400 text-sky-600 hover:bg-sky-800 hover:text-white'
    }
  }
}
