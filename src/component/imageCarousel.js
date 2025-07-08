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
    if (state.imgIndex < imgSrc.length - 1) {
      state.imgIndex = state.imgIndex + 1;
    } else {
      state.imgIndex = 0;
    }
  };

  const decrementImgIndex = () => {
    if (state.imgIndex > 0) {
      state.imgIndex = state.imgIndex - 1;
    } else {
      state.imgIndex = imgSrc.length - 1;
    }
  };

  const updateImg = (img) => {
    img.src = imgSrc[state.imgIndex];
  };

  const previousBtnEvent = () => {
    const img = document.querySelector(".img");
    decrementImgIndex();
    updateImg(img);
  };

  const nextBtnEvent = () => {
    const img = document.querySelector(".img");
    incrementImgIndex();
    updateImg(img);
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
    updateImg(img);
    return img;
  };

  const renderPreviousBtn = () => {
    const previousBtn = elementUtil.createElement(previosBtnAttr);
    previousBtn.addEventListener("click", previousBtnEvent);
    return previousBtn;
  };

  const renderNextBtn = () => {
    const nextBtn = elementUtil.createElement(nextBtnAttr);
    nextBtn.addEventListener("click", nextBtnEvent);
    return nextBtn;
  };

  return renderCarousel();
};

export default imageCarousel;
