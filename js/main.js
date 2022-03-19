/* Change favicon based on OS theme */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var link = document.querySelector("link[rel~='icon']");
  link.href = "https://iliyan03.github.io/voigons/images/logo.png";
}

/* Show navbar options on mobile devices */
function showBar(){
  let responsiveButtons = document.getElementById("responsiveButtons");
  if (responsiveButtons.classList.contains("active")){
      responsiveButtons.classList.remove("active")
  } else{
      responsiveButtons.classList.add("active")
  }
}

/* Slideshow */
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
  startTimer()
}
/* Slideshow ends here */


/* Youtube API for slideshow iframes */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[2];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var player_2;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('blasting_courier_player', {
    videoId: 'mWy210QVbNU',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
  player_2 = new YT.Player('premortal', {
    videoId: 'hvqM2Ei1Tfo',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    clearInterval(timer);
  } else if (event.data == YT.PlayerState.PAUSED){
    startTimer()
  }
}

/* Youtube API for slideshow iframes - ends here */
