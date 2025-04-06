import { Component, Input } from '@angular/core';
import { GroupData } from '../../../types';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
})
export class Group {
  @Input() participants!: GroupData;
  @Input() wsNumber!: number;
}
