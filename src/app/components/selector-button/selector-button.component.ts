import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'selector-button',
  templateUrl: './selector-button.component.html',
})
export class SelectorButton {
  @Input() text!: string;
  @Input() disabled!: boolean;
  @Output() onPress = new EventEmitter<void>();
}
