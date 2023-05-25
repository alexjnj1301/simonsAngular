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

  ClickOnButton(classColor: string) {
    this.clickColor.push(classColor);
    console.log(this.clickColor);
  }
}
