import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectorButton } from '../selector-button/selector-button.component';
import { Configuration } from '../configuration/configuration.component';
import { ConfigurationData } from '../../../types';

@Component({
  selector: 'first-stage',
  templateUrl: './first-stage.component.html',
  imports: [SelectorButton, Configuration],
})
export class FirstStage {
  @Input() selectedConfig!: number | undefined;
  @Input() configs!: ConfigurationData[];
  @Output() setSelected = new EventEmitter<number>();
  @Output() nextStage = new EventEmitter<void>();
}
