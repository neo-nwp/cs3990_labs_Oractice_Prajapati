import { Button } from './myButton.js'; 
export class ColorButton extends Button {
  constructor(btnText, btnBgColor, btnTitle, fColor) {
      super(btnText, btnBgColor, btnTitle);
      this.fColor = fColor;
  }

  show() {
      const button = document.createElement('button');
      super.show(); 
      button.style.color = this.fColor;

      document.getElementById('button-container').appendChild(button);
  }
}
