console.log("hi");
// spreekt open button aan
var openButton = document.querySelector("header button");

openButton.onclick = openMenu;

function openMenu() {  

  var deNav = document.querySelector("nav");
  // voegt class toe aan nav
  deNav.classList.add("toonMenu");
}


// menu sluiten

// spreekt sluit button aan
var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

// verwijdert de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}



