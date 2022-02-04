function showBar(){
    let responsiveButtons = document.getElementById("responsiveButtons");
    if (responsiveButtons.classList.contains("active")){
        responsiveButtons.classList.remove("active")
    } else{
        responsiveButtons.classList.add("active")
    }
}

var slideIndex = 1;
let timer;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function startTimer(){
  timer = setInterval(plusSlides, 5000, 1)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  if (timer){
    clearInterval(timer);
  }
/*   startTimer(slideIndex)
 */}