//Menu data
let hannaMenu = [
    { name: "Home", iconSrc: "./Images/home.jpeg" },
    { name: "Favorites", iconSrc: "./Images/fav.jpeg" },
    { name: "Achievements", iconSrc: "./Images/achive.jpeg" }
  ];
  
let hannaData = [
    {
        item: "home",
        img:"./Images/gp.jpeg",
        content:" Grande Prairie is located in Northwestern Alberta, in the heart of the Peace Region."
    },
    {
        item: "favorites",
        img:"./Images/eastlink.jpeg",
        content:"Life is all about movement and we want you to come move wih us at the Eastlink Centre."   
    },
    {
        item: "achievements",
        img:"./Images/achivement.jpeg",
        content:"An achievement is a great accomplishment-something achieved with grea effort or skill"   
    },
]

class MenuItem {
    constructor(name, iconSrc) {
      this.name = name;
      this.iconSrc = iconSrc;
    }
  
    render() {
      const $li = $("<li></li>")
        .attr("data-item", this.name.toLowerCase())
        .css({
          display: "inline-block",
          cursor: "pointer",
          margin: "0 15px",
          color: "black"
        });
  
      // Use <img> instead of emoji HTML entity
      const $icon = $(`<img src="${this.iconSrc}" alt="${this.name}" style="width:24px; vertical-align:middle;" />`);
      const $label = $(`<span class='label' style='display:none; margin-left:5px;'>${this.name}</span>`);
  
      $li.append($icon).append($label);
      $("#menu ul").append($li);
    }
  }
  

class Item {
    constructor(name, image, content) {
      this.name = name;
      this.image = image;
      this.content = content;
    }
  
    render() {
      const $section = $("<section></section>");
      const $header = $(`<h2 style="color:white; background:#0366d6; padding:10px;">${this.name}</h2>`);
      const $img = $(`<img src="${this.image}" style="max-width:100%; margin:10px 0;" />`);
      const $p = $(`<p style="color:black;">${this.content}</p>`);
      $section.append($header, $img, $p);
      $("#main").empty().append($section);
    }
  }
  
  // Generate menu
  hannaMenu.forEach(item => {
    const menuItem = new MenuItem(item.name, item.iconSrc);
    menuItem.render();
  });
  
  // Menu toggle logic
  let menuExpanded = false;
  let originalText = $("h3").text();
  
  $("h3").on("click", function () {
    menuExpanded = !menuExpanded;
    $(".label").toggle(menuExpanded);
    $(this).html(menuExpanded ? "Menu &laquo;" : "Menu &raquo;");
  });
  
  // Hover arrow effect
  $("h3").hover(
    function () {
      if (!menuExpanded) $(this).html("Menu &raquo;");
    },
    function () {
      if (!menuExpanded) $(this).text("Menu");
    }
  );
  
  // Event delegation for menu clicks
  $("#menu ul").on("click", "li", function () {
    const itemKey = $(this).data("item");
    const match = hannaData.find(entry => entry.item === itemKey);
    if (match) {
      const item = new Item(itemKey, match.img, match.content);
      item.render();
    }
  });