var slideIndex, slides, dots, captionText;

function initGallery() {
    'use strict';
    slideIndex = 0;
    slides = document.getElementsByClassName('imageHolder');
    slides[slideIndex].style.opacity = '1';
    captionText = document.querySelector(".slideShowContainer .textHolder");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    dots = [];
    var dotsContainer = document.getElementById('dotsContainer'), i;

    for (i = 0; i < slides.length; i = i + 1) {
        var dot = document.createElement('span');
        dot.classList.add('dots');
        dot.setAttribute('onclick', 'moveSlide(' + i + ')');
        dotsContainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add('active');
}



initGallery();

function plusMove(n) {
    'use strict';
    moveSlide(slideIndex + n);
}

function moveSlide(n) {
    'use strict';
    var i, current, next;
    var moveslideAnimClass = {
        forCurrent : "",
        forNext : ""
    };
    var slideTextAnimeClass;

    if (n > slideIndex) {
        if (n >= slides.length) {n = 0; }
        moveslideAnimClass.forCurrent = 'moveLeftCurrentSlide';
        moveslideAnimClass.forNext = 'moveLeftNextSlide';
        slideTextAnimeClass = 'moveCaptionFromtop';
    } else if (n < slideIndex) {
        if (n < 0) {n = slides.length - 1; }
        moveslideAnimClass.forCurrent = 'moveRightCurrentSlide';
        moveslideAnimClass.forNext = 'moveRightNextSlide';
        slideTextAnimeClass = 'moveCaptionFromBottom';
    }


    if (n !== slideIndex) {
        next = slides[n];
        current = slides[slideIndex];

        for (i = 0; i < slides.length; i = i + 1) {
            slides[i].className = 'imageHolder';
            slides[i].style.opacity = '0';
            dots[i].classList.remove('active');
            
        }

        current.classList.add(moveslideAnimClass.forCurrent);
        next.classList.add(moveslideAnimClass.forNext);
        dots[n].classList.add('active');
        slideIndex = n;
    }
    captionText.style.display = 'none';
    // captionText.className = "captionText" + slideTextAnimeClass;
    captionText.innerText = slides[n].querySelector('.captionText').innerText;
    captionText.style.display = 'block';

}

