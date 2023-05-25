import { Component } from '@angular/core';
import { ButtonsDto } from '../interfaces/colorButtons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simonsAngular';
  classRed = 'red';
  buttonList : ButtonsDto[] = [
    {id: 1, classColor: 'red'},
    {id: 2, classColor: 'blue'},
    {id: 3, classColor: 'green'},
    {id: 4, classColor: 'yellow'}
  ];

  clickColor: string[] = [];

  colorSequenceListIA: string[] = [];

  ClickOnButton(classColor: string) {
    this.clickColor.push(classColor);
    console.log(this.clickColor);
  }

  addOneSequence() {
    let random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1:
        this.colorSequenceListIA.push('red');
        break;
      case 2:
        this.colorSequenceListIA.push('blue');
        break;
      case 3:
        this.colorSequenceListIA.push('green');
        break;
      case 4:
        this.colorSequenceListIA.push('yellow');
        break;
    }
    console.log(this.colorSequenceListIA);
  }
}