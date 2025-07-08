import elementUtil from "../elementUtil";

const imageCarouselAttr = {
  elementType: "div",
  elementAttribute: {
    class: "imageCarousel",
  },
};

const imgAttr = {
  elementType: "img",
  elementAttribute: {
    class: "img",
  },
};

const imageCarousel = (imgSrc) => {
  const renderCarousel = () => {
    const imageCarousel = elementUtil.createElement(imageCarouselAttr);
    imageCarousel.appendChild(renderImg());
    return imageCarousel;
  };

  const renderImg = () => {
    const img = elementUtil.createElement(imgAttr);
    return img;
  };

  return renderCarousel();
};

export default imageCarousel;
