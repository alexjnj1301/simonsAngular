import { Component } from '@angular/core';
import { ButtonsDto } from '../interfaces/colorButtons';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    this.start();
  }

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
    const index = this.clickColor.length - 1;
    const iaListSize = this.colorSequenceListIA.length;
    if (this.clickColor[index] !== this.colorSequenceListIA[index]) {
      alert('perdu à la manche n°' + this.colorSequenceListIA.length + ' !');
      this.clickColor = [];
      this.colorSequenceListIA = [];
      this.addOneSequence();
    } else {
      if (this.clickColor.length === this.colorSequenceListIA.length) {
        if (iaListSize === index + 1) {
          this.addOneSequence();
          this.clickColor = [];
        }
      }
    }
  }

  private addOneSequence() {
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
    console.log("Séquence : ", this.colorSequenceListIA);
    this.displayButtonsToClick();
  }

  private displayButtonsToClick() {
    let i = 0;
    const sequence = this.colorSequenceListIA;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        console.log(sequence[i]);
        const color = sequence[i];

        const element = document.getElementById(color);
      if (element) {
          element.classList.add('focused');
          setTimeout(() => element.classList.remove('focused'), 500);
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  public start(){
    this.colorSequenceListIA = [];
    this.addOneSequence();
  }
}
