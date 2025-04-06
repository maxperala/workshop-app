import { Component } from '@angular/core';
import { FirstStage } from './components/first-stage/first-stage.component';
import { ConfigurationData } from '../types';
import configs from '../schedules.json';
import { SecondStage } from './components/second-stage/second-stage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FirstStage, SecondStage],
})
export class AppComponent {
  title = 'Tepon Workshop Työkalu';
  selectedConfig: number | undefined = undefined;
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
