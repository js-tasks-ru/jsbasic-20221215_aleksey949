import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;

    this._currentSlideCount = 0;
    this.render();
    this.update();
    this.addEventListener();
  }

  render() {
    this.elem = createElement(`
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner"></div></div>`);

    this.findElement('.carousel__inner').append(...(this.renderSlides()));
  }

  findElement(attr) {
    return this.elem.querySelector(attr);
  }


  renderSlides() {
    return this.slides.map(slide =>
      createElement(`
    <div class="carousel__slide" data-id=${slide.id}>
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`));
  }

  update() {
    const slider = this.findElement('.carousel__inner');
    const rightButton = this.findElement('.carousel__arrow_right');
    const leftButton = this.findElement('.carousel__arrow_left');
    // Сдвиг на какую ширину, учитывая номер слайда
    let offset = -this._currentSlideCount * slider.offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;

    if (this._currentSlideCount === this.slides.length - 1) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = '';
    }

    if (this._currentSlideCount === 0) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
    }
  }

  addEventListener() {
    this.elem.onclick = ({target}) => {
      if (target.closest('.carousel__button')) {
        let slideId = target.closest('[data-id]').dataset.id;
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slideId,
          bubbles: true
        }));
      }
      if (target.closest('.carousel__arrow_right')) {
        this._currentSlideCount++;
        this.update();
      }
      if (target.closest('.carousel__arrow_left')) {
        this._currentSlideCount--;
        this.update();
      }
    };
  }
}
