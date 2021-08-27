function moveSlide(arrowLeft, arrowRight, direction) {
  const numOfSlides = document.getElementsByClassName('carousel__slide').length;
  const slideWidth = document.getElementsByClassName('carousel__slide')[0].offsetWidth;
  const carousel = document.getElementsByClassName('carousel__inner')[0];
  const maxOffset = numOfSlides * slideWidth;

  let offset;
  if (!carousel.style.transform) {
    offset = 0;
  } else {
    offset = parseInt(carousel.style.transform.replace(/[^0-9-]/g, ''));
  }

  if (direction === 'left') {
    offset += slideWidth;
  } else {
    offset -= slideWidth;
  }


  if (offset === 0) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }

  if (offset - slideWidth === -maxOffset) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }

  carousel.style.transform = `translateX(${offset}px)`;
}

function initCarousel() {
  const arrowLeft = document.getElementsByClassName('carousel__arrow_left')[0];
  const arrowRight = document.getElementsByClassName('carousel__arrow_right')[0];

  arrowLeft.addEventListener("click", function() {
    moveSlide(arrowLeft, arrowRight, 'left');
  });
  arrowRight.addEventListener("click", function() {
    moveSlide(arrowLeft, arrowRight, 'right');
  });

  arrowLeft.style.display = 'none';
}
