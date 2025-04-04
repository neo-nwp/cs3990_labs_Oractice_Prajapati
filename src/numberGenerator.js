export class NumberGenerator {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.currentNumber =  Math.floor(Math.random() * 101); ;
      this.render();
      this.attachEventListeners();
    }
  
    render() {
      this.container.innerHTML = `
        <div class="number-generator">
          <div class="controls">
            <button class="decrease-btn">⬅️</button>
            <button class="generate-btn">Generate</button>
            <button class="increase-btn">➡️</button>
          </div>
          <div class="number-display">${this.currentNumber}</div>
        </div>
        <div class="news-container"></div>
      `;
      
      this.numberDisplay = this.container.querySelector('.number-display');
      this.newsContainer = this.container.querySelector('.news-container');
      
      this.updateNews();
    }
  
    attachEventListeners() {
      const generateBtn = this.container.querySelector('.generate-btn');
      const decreaseBtn = this.container.querySelector('.decrease-btn');
      const increaseBtn = this.container.querySelector('.increase-btn');
      
      generateBtn.addEventListener('click', () => {
        this.currentNumber = Math.floor(Math.random() * 101); // 0-100
        this.updateDisplay();
        this.updateNews();
      });
      
      decreaseBtn.addEventListener('click', () => {
        if (this.currentNumber > 0) {
          this.currentNumber--;
          this.updateDisplay();
          this.updateNews();
        }
      });
      
      increaseBtn.addEventListener('click', () => {
        if (this.currentNumber < 100) {
          this.currentNumber++;
          this.updateDisplay();
          this.updateNews();
        }
      });
      
      this.newsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
          event.target.closest('.news-item').remove();
        }
      });
    }
    
    updateDisplay() {
      this.numberDisplay.textContent = this.currentNumber;
    }
    
    updateNews() {
      this.newsContainer.innerHTML = '';
      
      for (let i = 0; i < this.currentNumber; i++) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
          <h3>News Item #${i + 1}</h3>
          <p>This is a sample news content for item #${i + 1}.</p>
          <button class="remove-btn">Remove</button>
        `;
        this.newsContainer.appendChild(newsItem);
        this.currentNumber;
      }
    }
  }