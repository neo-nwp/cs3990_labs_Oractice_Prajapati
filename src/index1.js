const newsResources = [
  {
    srcImg: "../Images/frog.jpeg",
    newsTitle: "Frog",
    newsContent:
      "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura. The oldest fossil 'proto-frog' Triadobatrachus is known from the Early Triassic of Madagascar (250 million years ago).",
  },
  {
    srcImg: "../Images/banff.jpeg",
    newsTitle: "Banff",
    newsContent:
      "The purpose of lorem ipsum is to create a natural-looking block of text that doesn't distract from the layout. It's useful when the focus is on design, not content.",
  },
  {
    srcImg: "../Images/jasper.jpeg",
    newsTitle: "Jasper",
    newsContent:
      "Jasper is a specialized municipality and townsite in western Alberta within the Canadian Rockies. It is the commercial centre of Jasper National Park.",
  },
];

class News {
  constructor(srcImg, title, content) {
    this.srcImg = srcImg;
    this.title = title;
    this.content = content;
    this.likes = 0;
    this.newsElement = null;
  }

  incrementLikes() {
    this.likes++;
    this.updateLikes();
  }

  hide() {
    if (this.newsElement) {
      this.newsElement.classList.add("hidden");
      this.newsElement.querySelector(".like-btn")?.setAttribute("disabled", true);
    }
  }

  updateLikes() {
    const likeCounter = this.newsElement?.querySelector(".stars");
    if (likeCounter) likeCounter.innerHTML = "★".repeat(this.likes);
  }

  createElement() {
    const section = document.createElement("section");
    section.className = "news-card";

    const title = document.createElement("h2");
    title.textContent = this.title;

    const image = document.createElement("img");
    image.src = this.srcImg;
    image.alt = this.title;
    image.width = 200;

    const content = document.createElement("p");
    content.textContent = this.content;

    const likeCounter = document.createElement("div");
    likeCounter.className = "stars";

    const likeButton = document.createElement("button");
    likeButton.textContent = "LIKE";
    likeButton.className = "like-btn";
    likeButton.onclick = () => this.incrementLikes();

    const hideButton = document.createElement("button");
    hideButton.textContent = "HIDE";
    hideButton.onclick = () => this.hide();

    section.append(title, image, content, likeCounter, likeButton, hideButton);

    this.newsElement = section;
    return section;
  }

  render(target) {
    target.appendChild(this.createElement());
  }
}

function generateNews() {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = ""; 

  newsResources.forEach((newsItem) => {
    const news = new News(newsItem.srcImg, newsItem.newsTitle, newsItem.newsContent);
    news.render(contentContainer);
  });
}

window.onload = generateNews;
