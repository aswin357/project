window.onload = load;

function load() {
  let btnToggle = document.querySelector(".btn-toggle");

  btnToggle.addEventListener("click", (e) => {
    let sidebar = document.querySelector(".sidebar");
    let container = document.querySelector(".container");
    sidebar.classList.toggle("active");
    container.classList.toggle("active_margin_left");
  });
}


let dropdownButton = document.querySelector(".dropdown-button");
let dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});


let dropdownButton1 = document.querySelector(".dropdown-button");
let dropdownContent1 = document.querySelector(".dropdown-content1");

dropdownButton1.addEventListener("click", function() {
  dropdownContent1.classList.toggle("show");
});

var lastModified = new Date(document.lastModified);
var minutes = lastModified.getUTCMinutes();
document.getElementById("example").innerHTML =  minutes + " minutes ago";

var lastModified = new Date(document.lastModified);
var minutes = lastModified.getUTCMinutes();
document.getElementById("example1").innerHTML =  minutes + " minutes ago";

var lastModified = new Date(document.lastModified);
var minutes = lastModified.getUTCMinutes();
document.getElementById("example2").innerHTML =  minutes + " minutes ago";
