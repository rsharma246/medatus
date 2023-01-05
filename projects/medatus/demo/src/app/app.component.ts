import { Component } from '@angular/core';
import { ButtonColor, ButtonSize, ButtonStyle } from '@medatus/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@medatus/demo';
  btnColor = ButtonColor;
  btnSize = ButtonSize;
  btnStyle = ButtonStyle;


}
