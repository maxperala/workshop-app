import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationData, Participant, PersonMap } from '../../../types';
import { NextPrevious } from '../next-previous-btns/next-previous.component';
import { Group } from '../group/group.component';

// These would be better moved to a global config file or similar
const colors = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-purple-400',
  'bg-orange-400',
  'bg-cyan-400',
  'bg-lime-400',
  'bg-fuchsia-400',
];

@Component({
  selector: 'second-stage',
  templateUrl: './second-stage.component.html',
  imports: [NextPrevious, Group],
})
export class SecondStage implements OnInit {
  @Input() selectedConfig!: ConfigurationData;
  currentRound = 1;
  personMap!: PersonMap;
  ngOnInit(): void {
    this.personMap = this.constructPersonMap();
  }

  get maxRounds() {
    return this.selectedConfig.rotation.length;
  }
  get selectedConfigValue() {
    return this.selectedConfig;
  }

  nextRound = () => {
    if (this.currentRound < this.maxRounds) {
      this.currentRound += 1;
    }
  };
  prevRound = () => {
    if (this.currentRound > 1) {
      this.currentRound -= 1;
    }
  };
  getColor = (groupIndex: number) => {
    if (groupIndex >= colors.length) {
      return 'white';
    }
    return colors[groupIndex];
  };
  // Create an object of each particant. Allows easily adding new features like custom names later :)
  constructPersonMap = (): PersonMap => {
    const persons = new Map<number, Participant>();
    let groupNumber = 0;
    for (const initialGroups of this.selectedConfigValue.rotation[0]) {
      initialGroups.forEach((participantId) => {
        persons.set(participantId, {
          id: participantId,
          color: this.getColor(groupNumber),
        });
      });
      groupNumber++;
    }
    return persons;
  };
}
