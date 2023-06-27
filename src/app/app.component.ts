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
    console.log("cliqué sur " + classColor);
    this.clickColor.push(classColor);
    const index = this.clickColor.length - 1;
    const iaListSize = this.colorSequenceListIA.length;
    if (this.clickColor[index] !== this.colorSequenceListIA[index]) {
      console.log('perdu');
      this.clickColor = [];
      this.colorSequenceListIA = [];
      this.addOneSequence();
    } else {
      if (this.clickColor.length === this.colorSequenceListIA.length) {
        console.log('gagné');
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
  }

  public start(){
    this.colorSequenceListIA = [];
    this.addOneSequence();
  }
}
