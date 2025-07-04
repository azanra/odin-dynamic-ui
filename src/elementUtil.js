const elementUtil = (function () {
  const createElement = (attribute) => {
    const { elementType, elementAttribute } = attribute;
    const element = document.createElement(elementType);
    setMultipleAttributeToElement(element, elementAttribute);
  };

  const setMultipleAttributeToElement = (element, attribute) => {
    for (const attr in attribute) {
      element.setAttribute(attr, attribute[attr]);
    }
  };
})();

export default elementUtil;
