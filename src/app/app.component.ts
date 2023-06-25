import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  colors = [
    'blue',
    'aquamarine',
    'yellow',
    'DarkOrchid',
    'GreenYellow',
    'DeepPink',
  ];
}
