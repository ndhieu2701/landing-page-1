// splide slider:
// margin left wrapped 300/8%

var arrowLeft = document.querySelector(".arrow-left");
var arrowRight = document.querySelector(".arrow-right");
var line = document.querySelector(".line");
var splideSlide = document.querySelector(".splide-slider-wrapped");
var splideSlideWrapped = document.querySelector(".splide-slider")

var count = 0;
var lineChange = splideSlideWrapped.offsetWidth / 6 ; 
var slideChange = splideSlide.offsetWidth / 8;

arrowRight.onclick = function () {
    count += 1;
    // set line width and margin left slider
    var lineWidth = line.offsetWidth;
    var slideLeft = splideSlide.offsetLeft;
    line.style.width = lineWidth + lineChange + "px";
    splideSlide.style.marginLeft = slideLeft - slideChange + "px"

    // visibility arrow left & right btn
    if (count == 5) {
        arrowRight.classList.remove("active")
    } else {
        arrowRight.classList.add("active")
    }

    if(count != 0) {
        arrowLeft.classList.add("active")
    }
}

arrowLeft.onclick = function () {
    count -= 1;
    // set line width and margin left slider
    var lineWidth = line.offsetWidth;
    var slideLeft = splideSlide.offsetLeft;
    line.style.width = lineWidth - lineChange + "px";
    splideSlide.style.marginLeft = slideLeft + slideChange + "px"
    
    // visibility arrow left & right btn
    if (count == 0) {
        arrowLeft.classList.remove("active");
    } else {
        arrowLeft.classList.add("active");
    }
    if (count != 5) {
        arrowRight.classList.add("active")
    }
}

