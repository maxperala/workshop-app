import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigurationData } from '../../../types';

@Component({
  templateUrl: './configuration.component.html',
  selector: 'configuration',
})
export class Configuration {
  @Input() selected!: boolean;
  @Input() config!: ConfigurationData;
  @Output() setSelected = new EventEmitter<void>();

  getStyle = () => {
    return this.selected
      ? 'bg-secondary border-2 w-full p-7 rounded-2xl shadow-md flex flex-col transition-all'
      : 'bg-gray-200 border-2 w-full p-7 rounded-2xl flex flex-col hover:cursor-pointer hover:scale-110 transition-all';
  };
}
