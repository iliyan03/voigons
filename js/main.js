function showBar(){
    let responsiveButtons = document.getElementById("responsiveButtons");
    if (responsiveButtons.classList.contains("active")){
        responsiveButtons.classList.remove("active")
    } else{
        responsiveButtons.classList.add("active")
    }
}