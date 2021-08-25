let offset = 0;

function shift(direction) {
  const slide = document.getElementsByClassName('carousel__inner')[0];
  if (direction === 'left') {
    offset += slide.offsetWidth;
  } else {
    offset -= slide.offsetWidth;
  }
  
  const left = document.getElementsByClassName('carousel__arrow carousel__arrow_left')[0];
  const right = document.getElementsByClassName('carousel__arrow carousel__arrow_right')[0];
  if (offset === 0) {
    left.style.display = 'none';
  } else if (offset === -2565) {
    right.style.display = 'none';
  } else {
    left.style.display = '';
    right.style.display = '';
  }

  slide.style.transform = `translateX(${offset}px)`;
}

function initCarousel() {
  const left = document.getElementsByClassName('carousel__arrow carousel__arrow_left')[0];
  const right = document.getElementsByClassName('carousel__arrow carousel__arrow_right')[0];
  left.style.display = 'none';

  left.addEventListener('click', () => {
    shift('left');
  });
  right.addEventListener('click', () => {
    shift('right');
  });
}
