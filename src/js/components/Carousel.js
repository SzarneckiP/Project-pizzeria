/* eslint-disable */

class Carousel {
  constructor(elem){
    const thisCarousel = this;
    thisCarousel.render(elem);
    thisCarousel.initPlugin();
  }

  render(elem){
    const thisCarousel = this;
    thisCarousel.wrapper = elem;
  }

  initPlugin(){
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
