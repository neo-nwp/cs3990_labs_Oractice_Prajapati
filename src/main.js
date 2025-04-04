import { NumberGenerator } from './numberGenerator.js';
import { ColorButton, PaletteMenu } from './colorPalette.js';
import { ImprovedMenu } from './imporvedMenu.js';
import { Fruit, RatedFruit, btnColor } from './fruitList.js';

document.addEventListener('DOMContentLoaded', function() {
  // Task 1
  new NumberGenerator('app');
  
  // Task 2
  new PaletteMenu('palette-container', 'target-text');
  
  // Task 3
  new ImprovedMenu('sweeties-menu', 'sweeties-image');
  
  // Task 4
  $(function() {
      const hannaFruits = [
      { name: "Apple", color: "red", rating: 4 },
      { name: "Banana", color: "yellow", rating: 5 },
      { name: "Orange", color: "orange", rating: 3 },
      { name: "Kiwi", color: "green", rating: 4 },
      { name: "Blueberry", color: "blue", rating: 5 },
      { name: "Grape", color: "purple", rating: 2 },
      { name: "Strawberry", color: "red", rating: 5 },
      { name: "Lemon", color: "yellow", rating: 1 },
    ];
    
    // Clear the containers
    $('#fruitList').empty();
    $('#fruitColors').empty();
    
    // Track unique colors
    const uniqueColors = [];
    
    // Create and show fruit items
    hannaFruits.forEach(fruit => {
      const fruitObj = new RatedFruit(fruit.name, fruit.color, fruit.rating);
      fruitObj.show();
      
      // Track unique colors
      if (!uniqueColors.includes(fruit.color)) {
        uniqueColors.push(fruit.color);
      }
    });
    
    // Create and show color buttons
    uniqueColors.forEach(color => {
      const btnObj = new btnColor(color);
      btnObj.show();
    });
    
    $('#fruitColors').on('click', '.color-btn', function() {
      const selectedColor = $(this).data('color');
      
      $('#fruitList li').removeClass('highlighted');
      
      $(`#fruitList li[data-color="${selectedColor}"]`).addClass('highlighted');
    });
    
    $('#fruitList').on('click', '.star', function() {
      const rating = $(this).data('rating');
      const starsContainer = $(this).parent();
      
      starsContainer.find('.star').removeClass('filled');
      
      // Fill stars up to the clicked one
      $(this).addClass('filled');
      $(this).prevAll('.star').addClass('filled');
    });
  });
});