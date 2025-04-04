export class ImprovedMenu {
    constructor(menuId, imageContainerId) {
      this.menu = document.getElementById(menuId);
      this.imageContainer = document.getElementById(imageContainerId);
      this.isOpen = true;
      this.currentSelectedItem = null;
      
      // Define menu items and their corresponding images
      this.sweetItems = {
        'Cakes': '../Images/cake.jpeg ',
        'Donuts': '../Images/donuts.jpeg ',
        'Honey': '../Images/honey.jpeg ',
        'Ice Cream': '../Images/ice-cream.jpeg'
      };
      
      this.init();
    }
    
    init() {
      // Clear any existing content
      this.menu.innerHTML = '';
      
      // Create the title element that will toggle the menu
      const titleElement = document.createElement('div');
      titleElement.className = 'menu-title';
      titleElement.textContent = 'Sweeties (click me)';
      this.menu.appendChild(titleElement);
      
      // Create the list items
      const ul = document.createElement('ul');
      
      Object.keys(this.sweetItems).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.dataset.sweetType = item;
        ul.appendChild(li);
      });
      
      this.menu.appendChild(ul);
      
      // Initialize the image container
      this.imageContainer.innerHTML = '';
      
      // Add event listeners
      titleElement.addEventListener('click', this.toggleMenu.bind(this));
      ul.addEventListener('click', this.selectItem.bind(this));
      
      // Store references
      this.ulElement = ul;
      this.titleElement = titleElement;
    }
    
    toggleMenu() {
      if (this.isOpen) {
        this.ulElement.style.display = 'none';
        
        // Hide the image when menu is closed
        this.imageContainer.innerHTML = '';
        
        // Remove red color from selected item
        if (this.currentSelectedItem) {
          this.currentSelectedItem.style.color = '';
          this.currentSelectedItem = null;
        }
      } else {
        this.ulElement.style.display = '';
      }
      
      this.isOpen = !this.isOpen;
    }
    
    selectItem(event) {
      if (event.target.tagName === 'LI') {
        // Remove red color from previous selected item
        if (this.currentSelectedItem) {
          this.currentSelectedItem.style.color = '';
        }
        
        // Add red color to new selected item
        event.target.style.color = 'red';
        this.currentSelectedItem = event.target;
        
        // Display the corresponding image
        const sweetType = event.target.dataset.sweetType;
        this.imageContainer.innerHTML = `
          <img src="${this.sweetItems[sweetType]}" alt="${sweetType}" style="max-width: 100%;">
        `;
      }
    }
  }