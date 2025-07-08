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
  const state = {
    imgIndex: 0,
  };

  const incrementImgIndex = () => {
    if (imgIndex < imgSrc.length) {
      state.imgIndex = state.imgIndex++;
    } else {
      state.imgIndex = 0;
    }
  };

  const decrementImgIndex = () => {
    if (imgIndex > 0) {
      state.imgIndex = state.imgIndex--;
    } else {
      state.imgIndex = imgSrc.length - 1;
    }
  };

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
