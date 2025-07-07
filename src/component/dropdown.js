import elementUtil from "../elementUtil";

const dropdownAttr = {
  elementType: "div",
  elementAttribute: {
    class: "dropdown",
  },
};

const dropdownTriggerBtnAttr = {
  elementType: "button",
  elementAttribute: {
    class: "dropdownTrigger",
  },
  textContent: "Dropdown Trigger",
};

const dropdownMenuItemsAttr = {
  elementType: "div",
  elementAttribute: {
    class: "dropdownMenuItems",
  },
};

const dropdown = (menuItems) => {
  const renderDropdown = () => {
    const dropdown = elementUtil.createElement(dropdownAttr);
    dropdown.appendChild(renderTriggerBtn());
    const dropdownMenuItems = renderMenuItems(menuItems);
    dropdownMenuItems.forEach((menuItems) => {
      dropdown.appendChild(menuItems);
    });
    return dropdown;
  };

  const renderTriggerBtn = () => {
    const triggerBtn = elementUtil.createElement(dropdownTriggerBtnAttr);
    return triggerBtn;
  };

  const renderMenuItems = (menuItems) => {
    const dropdownMenuItems = menuItems.map((item) => {
      const menuItem = elementUtil.createElement(dropdownMenuItemsAttr);
      elementUtil.appendTextToElement(menuItem, item);
      menuItem.hidden = true;
      return menuItem;
    });
    return dropdownMenuItems;
  };

  return renderDropdown();
};

export default dropdown;
