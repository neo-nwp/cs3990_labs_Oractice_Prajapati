export class Button {
    constructor(btnText, btnBgColor, btnTitle) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

    show() {
        const button = document.createElement('button');
        button.textContent = this.btnText;
        button.style.backgroundColor = this.btnBgColor;
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '10px 15px';
        button.style.margin = '5px';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.title = this.btnTitle;

        document.getElementById('button-container').appendChild(button);
    }
}
