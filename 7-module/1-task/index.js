import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.className = 'ribbon';

    const leftArrow = document.createElement('button');
    leftArrow.className = "ribbon__arrow ribbon__arrow_left";
    const leftImg = document.createElement("img");
    leftImg.src = "/assets/images/icons/angle-icon.svg";
    leftImg.alt = "icon";
    leftArrow.appendChild(leftImg);
    this.elem.appendChild(leftArrow);

    const ribbonInner = document.createElement("nav");
    ribbonInner.className = "ribbon__inner";

    for (let i = 0; i < categories.length; i++) {
      const link = document.createElement('a');
      link.className = 'ribbon__item';
      link.setAttribute('data-id', categories[i].id);
      link.innerText = categories[i].name;
      const event = new CustomEvent('ribbon-select', { 
        detail: categories[i].id,
        bubbles: true
      });
      link.onclick = () => {
        link.dispatchEvent(event);
      };
      ribbonInner.appendChild(link);
    }
    this.elem.appendChild(ribbonInner);

    const rightArrow = document.createElement('button');
    rightArrow.className = "ribbon__arrow ribbon__arrow_right ribbon__arrow_visible";
    const rightImg = document.createElement("img");
    rightImg.src = "/assets/images/icons/angle-icon.svg";
    rightImg.alt = "icon";
    rightArrow.appendChild(rightImg);
    this.elem.appendChild(rightArrow);

    leftArrow.onclick = () => {
      ribbonInner.scrollBy(-350, 0);
      rightArrow.classList.add('ribbon__arrow_visible');
      if (ribbonInner.scrollLeft < 350) {
        leftArrow.classList.remove('ribbon__arrow_visible');
      }
    };

    rightArrow.onclick = () => {
      const scrollWidth = ribbonInner.scrollWidth;
      const scrollLeft = ribbonInner.scrollLeft;
      const clientWidth = ribbonInner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;

      ribbonInner.scrollBy(350, 0);
      leftArrow.classList.add('ribbon__arrow_visible');
      if (scrollRight <= 350) {
        rightArrow.classList.remove('ribbon__arrow_visible');
      }
    };



    


    // <button class="ribbon__arrow ribbon__arrow_right">
    //   <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    // </button>
    
    // let ribbonInner = document.querySelector('.ribbon__inner')
    // let leftScroll = document.querySelector('.ribbon__arrow_left');
    // let rightScroll = document.querySelector('.ribbon__arrow_right');


    // leftScroll.onclick = function() {
    //   ribbonInner.scrollBy(350, 0)
    // }

    // rightScroll.onclick = function() {
    //   ribbonInner.scrollBy(-350, 0);
    // }
    // let scrollLeft = ribbonInner.scrollLeft;
    // if (scrollLeft === 0) {
    //   console.log('end')
    // }

    // let scrollWidth = ribbonInner.scrollWidth;
    // let clientWidth = ribbonInner.clientWidth;

    // let scrollRight = scrollWidth - scrollLeft - clientWidth;
    // console.log(scrollRight)
  }

}
