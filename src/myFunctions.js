import { Button } from './myButton.js'; 
import { arrTexts, arrColors } from './myArrays.js';
// // Function to create buttons using forEach with simultaneous array looping
export function createButtons() {
    const arrButtons = [];
    
    // Use forEach to loop through both arrays simultaneously
    arrTexts.forEach((text, index) => {
        // Create btnTitle 
        const btnTitle = `${text} is shown on the ${arrColors[index]} background`;
        
        // Create Button instance and add to arrButtons
        const button = new Button(text, arrColors[index], btnTitle);
        arrButtons.push(button);
    });
    
    return arrButtons;
}

// Function to display buttons sequentially with setTimeout
export function displayButtons(arrButtons) {
    arrButtons.forEach((button, index) => {
        // Use setTimeout to display each button after a delay
        setTimeout(() => {
            button.show();
        }, index * 3000); 
    });
}

// Function to create and display a ColorButton
export function createColorButton() {
    const colorButton = new ColorButton(
        'Colored Button', 
        '#9b59b6', 
        'A color button with custom font color', 
        'white'
    );
    colorButton.show();
}