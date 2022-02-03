function showBar(){
    let responsiveButtons = document.getElementById("responsiveButtons");
    if (responsiveButtons.classList.contains("active")){
        responsiveButtons.classList.remove("active")
    } else{
        responsiveButtons.classList.add("active")
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}