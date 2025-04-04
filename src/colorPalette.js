export class ColorButton {
  constructor(color) {
    this.color = color;
    this.element = this.createButton();
  }

  createButton() {
    const button = document.createElement('div');
    button.className = 'color-button';
    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    button.style.color = this.getContrastColor(this.color);
    button.dataset.color = this.color;
    return button;
  }

  getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }
}

export class PaletteMenu {
  constructor(paletteContainerId, targetElementId) {
    this.paletteContainer = document.getElementById(paletteContainerId);
    this.targetElement = document.getElementById(targetElementId);
    this.colors = [
      '#266CB6', '#CECECE', '#D20103', '#E4080A', '#FE9900', '#33FFF3', '#7DDA58', '#060270', '#CC6CE7',
      '#FFFFFF', '#E8E8E8', '#E8E8E8', '#DFC57B', '#FF33FF', '#BFD641', '#FFA533', '#A533FF', '#33FFA5'
    ];
    
    this.handlers = {
      click: this.handleClick.bind(this),
      mouseover: this.handleMouseOver.bind(this),
      mouseout: this.handleMouseOut.bind(this)
    };
    
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.paletteContainer.innerHTML = '';
    const paletteElement = document.createElement('div');
    paletteElement.className = 'color-palette';
    
    this.colors.forEach(color => {
      const colorButton = new ColorButton(color);
      paletteElement.appendChild(colorButton.element);
    });
    
    this.paletteContainer.appendChild(paletteElement);
  }

  attachEventListeners() {
    this.paletteContainer.addEventListener('click', this.handlers.click);
    this.paletteContainer.addEventListener('mouseover', this.handlers.mouseover);
    this.paletteContainer.addEventListener('mouseout', this.handlers.mouseout);
  }

  handleClick(event) {
    if (event.target.classList.contains('color-button')) {
      this.targetElement.style.color = event.target.dataset.color;
    }
  }

  handleMouseOver(event) {
    if (event.target.classList.contains('color-button')) {
      this.targetElement.style.backgroundColor = event.target.dataset.color;
    }
  }

  handleMouseOut(event) {
    if (!this.paletteContainer.contains(event.relatedTarget)) {
      
    }
  }
}