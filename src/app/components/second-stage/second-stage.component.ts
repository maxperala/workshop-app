import { Component, Input } from '@angular/core';
import { ConfigurationData } from '../../../types';
import { NextPrevious } from '../next-previous-btns/next-previous.component';
import { Group } from '../group/group.component';

@Component({
  selector: 'second-stage',
  templateUrl: './second-stage.component.html',
  imports: [NextPrevious, Group],
})
export class SecondStage {
  @Input() selectedConfig!: ConfigurationData;
  currentRound = 1;

  get maxRounds() {
    return this.selectedConfig.rotation.length;
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
}
