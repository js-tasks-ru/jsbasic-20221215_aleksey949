function initCarousel() {
  let currentSlideCount = 0;
  const countSlides = 4;
  const slider = document.querySelector('.carousel__inner');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');

  update();

  document.querySelector('.carousel').addEventListener('click', ({target}) => {

    if (target.closest('.carousel__arrow_right')) {
      currentSlideCount++;
      update();
    }
    if (target.closest('.carousel__arrow_left')) {
      currentSlideCount--;
      update();
    }
  });

  function update() {
    // Сдвиг на какую ширину, учитывая номер слайда
    let offset = -currentSlideCount * slider.offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;

    if (currentSlideCount === countSlides - 1) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = '';
    }

    if (currentSlideCount === 0) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
    }
  }
}
