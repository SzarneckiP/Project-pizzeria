/* eslint-disable */

class Carousel {
  constructor(elem){
    const thisCarousel = this;
    thisCarousel.render(elem);
    thisCarousel.initCarousel();
  }

  render(elem){
    const thisCarousel = this;
    thisCarousel.wrapper = elem;
  }

  initCarousel(){
    const thisCarousel = this;

    new Flickity(thisCarousel.wrapper, {
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      prevNextButtons: false,
      wrapAround: true,
    });
  }
}

export default Carousel;
