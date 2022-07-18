function about() {
  window.location = "assets/html/about.html";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; slides.length > i; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function openhomesidebar(){
  document.getElementById("lists").style.width = '200px';
}

function closehomesidebar(){
  document.getElementById("lists").style.width = '0px';
}