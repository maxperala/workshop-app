import { Component, Input } from '@angular/core';
import { GroupData, PersonMap } from '../../../types';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
})
export class Group {
  @Input() participants!: GroupData;
  @Input() wsNumber!: number;
  @Input() personMap!: PersonMap;

  getPersonColor = (id: number): string => {
    const person = this.personMap.get(id);
    console.log(id, 'id', person);
    return person?.color ? person.color : 'white';
  };
  getStyle = (index: number) => {
    const textColor = this.getPersonColor(index);
    return `${textColor} text-sm p-4 border-1 rounded-sm`;
  };
}
