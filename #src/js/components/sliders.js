const projSlider = document.querySelector('.project-section__slider');

const projectSlider = new Swiper(projSlider, {
  slidesPerView: 3,
  spaceBetween: 30,
  on: {
    init: function() {
      const activeSlide = projSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');

    },
  },
  navigation: {
    nextEl: '.project-section__next',
    prevEl: '.project-section__prev',
  },
});

document.querySelector('.project-section__prev').addEventListener('click', () => {
      const activeSlide = projSlider.querySelector('.swiper-slide-next');

      document.querySelectorAll('.project-section__slider .swiper-slide').forEach(el => {
        el.classList.remove('slider-visible');
      });

      if (activeSlide.previousElementSibling) {
        const nextActiveSlide = activeSlide.previousElementSibling;
        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        activeSlide.nextElementSibling.classList.add('slider-visible');
      }
      
      
});

document.querySelector('.project-section__next').addEventListener('click', () => {
      const activeSlide = projSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      document.querySelectorAll('.project-section__slider .swiper-slide').forEach(el => {
        el.classList.remove('slider-visible');
      });

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,  
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});