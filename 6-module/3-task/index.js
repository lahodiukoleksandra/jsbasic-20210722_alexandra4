import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    </div>
    `);

    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
  
    arrowLeft.addEventListener("click", () => {
      this.moveSlide(arrowLeft, arrowRight, 'left');
    });
    arrowRight.addEventListener("click", () => {
      this.moveSlide(arrowLeft, arrowRight, 'right');
    });
  
    arrowLeft.style.display = 'none';

    const inner = this.elem.querySelector('.carousel__inner');
    for (const slideData of slides) {
      const slide = createElement(`
      <div class="carousel__slide" data-id="${slideData.id}">
        <img src="/assets/images/carousel/${slideData.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slideData.price.toFixed(2)}</span>
          <div class="carousel__title">${slideData.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);
      const btn = slide.querySelector('.carousel__button');
      const event = new CustomEvent("product-add", {
        detail: slideData.id,
        bubbles: true
      });
      btn.onclick = () => {
        this.elem.dispatchEvent(event);
      };
      inner.appendChild(slide);
    }
  }

  moveSlide(arrowLeft, arrowRight, direction) {
    const numOfSlides = this.elem.querySelectorAll('.carousel__slide').length;
    const slideWidth = this.elem.querySelector('.carousel__slide').offsetWidth;
    const carousel = this.elem.querySelector('.carousel__inner');
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
}