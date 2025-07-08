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

const previosBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "previousBtn",
  },
  textContent: "<",
};

const nextBtnAttr = {
  elementType: "button",
  elementAttribute: {
    type: "button",
    class: "nextBtn",
  },
  textContent: ">",
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
    imageCarousel.appendChild(renderPreviousBtn());
    imageCarousel.appendChild(renderImg());
    imageCarousel.appendChild(renderNextBtn());
    return imageCarousel;
  };

  const renderImg = () => {
    const img = elementUtil.createElement(imgAttr);
    return img;
  };

  const renderPreviousBtn = () => {
    const previousBtn = elementUtil.createElement(previosBtnAttr);
    return previousBtn;
  };

  const renderNextBtn = () => {
    const nextBtn = elementUtil.createElement(nextBtnAttr);
    return nextBtn;
  };

  return renderCarousel();
};

export default imageCarousel;
