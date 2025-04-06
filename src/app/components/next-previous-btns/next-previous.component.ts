import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectorButton } from '../selector-button/selector-button.component';

@Component({
  selector: 'next-previous',
  templateUrl: './next-previous.component.html',
  imports: [SelectorButton],
})
export class NextPrevious {
  @Input() nextEnabled!: boolean;
  @Input() prevEnabled!: boolean;

  @Output() nextRound = new EventEmitter<void>();
  @Output() prevRound = new EventEmitter<void>();
}
