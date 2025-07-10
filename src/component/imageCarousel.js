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

const navigationContainerAttr = {
  elementType: "div",
  elementAttribute: {
    class: "navigationContainer",
  },
};

const navigationAttr = {
  elementType: "div",
  elementAttribute: {
    class: "navigation",
  },
};

const imageCarousel = (imgSrc) => {
  const state = {
    imgIndex: 0,
  };

  const setImgIndex = (value) => {
    state.imgIndex = value;
  };

  const incrementImgIndex = () => {
    if (state.imgIndex < imgSrc.length - 1) {
      setImgIndex(state.imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  const decrementImgIndex = () => {
    if (state.imgIndex > 0) {
      setImgIndex(state.imgIndex - 1);
    } else {
      setImgIndex(imgSrc.length - 1);
    }
  };

  const updateImg = (img) => {
    img.src = imgSrc[state.imgIndex];
  };

  const previousBtnEvent = () => {
    const img = document.querySelector(".img");
    decrementImgIndex();
    updateImg(img);
    fillNavigation();
  };

  const nextBtnEvent = () => {
    const img = document.querySelector(".img");
    incrementImgIndex();
    updateImg(img);
    fillNavigation();
  };

  const renderCarousel = () => {
    const imageCarousel = elementUtil.createElement(imageCarouselAttr);
    imageCarousel.appendChild(renderPreviousBtn());
    imageCarousel.appendChild(renderImg());
    imageCarousel.appendChild(renderNextBtn());
    imageCarousel.appendChild(renderNavigationContainer());
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

  const fillNavigation = () => {
    const navigation = document.querySelectorAll(".navigation");
    const activeImg = imgSrc[state.imgIndex];
    navigation.forEach((nav) => {
      if (nav.id === activeImg) {
        nav.style.backgroundColor = "black";
      } else {
        nav.style.backgroundColor = "";
      }
    });
  };

  const fillNavigationOnLoad = () => {
    window.onload = () => {
      fillNavigation();
      navigationListener();
      autoAdvanceSlide();
    };
  };

  const navigationListener = () => {
    const navigation = document.querySelectorAll(".navigation");
    navigation.forEach((nav) => {
      nav.addEventListener("click", navigationEvent);
    });
  };

  const navigationEvent = (e) => {
    const img = document.querySelector(".img");
    const imgId = e.target.id;
    let imgIndex;
    imgSrc.forEach((src, index) => {
      if (imgId === src) {
        imgIndex = index;
      }
    });
    setImgIndex(imgIndex);
    updateImg(img);
    fillNavigation();
  };

  const renderNavigationContainer = () => {
    const navContainer = elementUtil.createElement(navigationContainerAttr);
    const navigation = renderNavigation();
    navigation.forEach((nav) => {
      navContainer.appendChild(nav);
    });
    return navContainer;
  };

  const renderNavigation = () => {
    const nav = imgSrc.map((img, index) => {
      const navItem = elementUtil.createElement(navigationAttr);
      navItem.id = img;
      navItem.class = index;
      return navItem;
    });
    return nav;
  };

  const autoAdvanceSlide = () => {
    setInterval(() => {
      const img = document.querySelector(".img");
      incrementImgIndex();
      updateImg(img);
      fillNavigation();
    }, "5000");
  };

  fillNavigationOnLoad();

  return renderCarousel();
};

export default imageCarousel;
