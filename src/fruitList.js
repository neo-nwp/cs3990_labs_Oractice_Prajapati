export class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  
  show() {
    const item = $('<li></li>')
      .addClass('fruit-item')
      .attr('data-color', this.color)
      .text(this.name)
      .css('background-color', this.getBackgroundColor(this.color));
    
    $('#fruitList').append(item);
    return item;
  }

  getBackgroundColor(color) {
    const colorMap = {
      'red': '#E4080A',
      'yellow': '#FFDE59',
      'orange': '#FE9900',
      'green': '#7DDA58',
      'blue': '#35B6F1',
      'purple': '#E1BEE7'
    };
    return colorMap[color.toLowerCase()] || '#FFFFFF';
  }
}

export class RatedFruit extends Fruit {
  constructor(name, color, rating) {
    super(name, color);
    this.rating = Math.max(1, Math.min(5, rating));
  }
  
  show() {
    const item = super.show();
    
    const starsContainer = $('<div></div>').addClass('stars-container');
    
    for (let i = 1; i <= 5; i++) {
      const star = $('<span></span>')
        .addClass('star')
        .addClass(i <= this.rating ? 'filled' : '')
        .attr('data-rating', i)
        .html('★');
      
      starsContainer.append(star);
    }
    
    item.append(starsContainer);
    return item;
  }
}
  
  export class btnColor {
    constructor(color) {
      this.color = color;
    }
    
    show() {
      // Create a button with the color name
      const button = $('<button></button>')
        .addClass('color-btn')
        .attr('data-color', this.color)
        .text(this.color)
        .css('background-color', this.color)
        .css('color', this.getContrastColor(this.color));
      
      // Add the button to the colors container
      $('#fruitColors').append(button);
      
      return button;
    }
    
    getContrastColor(color) {
      const colors = {
        'red': '#ffffff',
        'blue': '#ffffff',
        'green': '#000000',
        'yellow': '#000000',
        'orange': '#000000',
        'purple': '#ffffff'
      };
      
      return colors[color.toLowerCase()] || '#000000';
    }
  }