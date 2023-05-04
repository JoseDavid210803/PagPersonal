let images = Array.from(document.getElementsByClassName("imgCarousel"))

let mainPhoto = document.getElementById("mainPhoto")

let slideIndex = 0;

function updateimage(event){
    let image = event.target

    mainPhoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener("click",updateimage)
});