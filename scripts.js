const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slider = document.querySelector(".slider-line");


nextButton.addEventListener('click', function(){
    if (slider.classList.contains("position-first")){
        slider.classList.remove("position-first");
        slider.classList.add("position-second");
        prevButton.classList.remove("opacity");
    } else if (slider.classList.contains("position-second")){
        slider.classList.remove("position-second");
        slider.classList.add("position-third");
        nextButton.classList.add("opacity");
    }
});

prevButton.addEventListener('click', function(){
    if (slider.classList.contains("position-third")){
        slider.classList.remove("position-third");
        slider.classList.add("position-second");
        nextButton.classList.remove("opacity");
    } else if (slider.classList.contains("position-second")){
        slider.classList.remove("position-second");
        slider.classList.add("position-first");
        prevButton.classList.add("opacity");
    }
});





