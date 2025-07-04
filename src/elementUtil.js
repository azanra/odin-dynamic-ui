const elementUtil = (function () {
  const createElement = (attribute) => {
    const { elementType, elementAttribute, textContent } = attribute;
    const element = document.createElement(elementType);
    setMultipleAttributeToElement(element, elementAttribute);
    appendTextToElement(element, textContent);
    return element;
  };

  const setMultipleAttributeToElement = (element, elementAttribute) => {
    for (const attribute in elementAttribute) {
      element.setAttribute(attr, elementAttribute[attribute]);
    }
  };

  const appendTextToElement = (element, text) => {
    element.textContent = text;
  };

  return { createElement, setMultipleAttributeToElement, appendTextToElement };
})();

export default elementUtil;
