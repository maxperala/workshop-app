import { Component } from '@angular/core';
import { FirstStage } from './components/first-stage/first-stage.component';
import { ConfigurationData } from '../types';

const configs: ConfigurationData[] = [
  {
    participants: 9,
    groups: 3,
  },
  {
    participants: 32,
    groups: 6,
  },
  {
    participants: 78,
    groups: 9,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FirstStage],
})
export class AppComponent {
  title = 'Tepon Workshop Työkalu';
  selectedConfig: number | null = null;
  stage = 1;
  allConfigs: ConfigurationData[] = configs;

  setSelected = (i: number) => {
    console.log('selected', i);
    this.selectedConfig = i;
  };
  nextStage = () => {
    console.log('called');
    this.stage += 1;
  };
}
