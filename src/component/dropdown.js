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

const dropdownMenuItemAttr = {
  elementType: "div",
  elementAttribute: {
    class: "dropdownMenuItem",
  },
};

const dropdown = (menuItems) => {
  const renderDropdown = () => {
    const dropdown = elementUtil.createElement(dropdownAttr);
    dropdown.appendChild(renderTriggerBtn());
    const dropdownMenuItem = elementUtil.createElement(dropdownMenuItemAttr);
    const dropdownMenuItems = renderMenuItems(menuItems);
    dropdownMenuItems.forEach((menuItems) => {
      dropdownMenuItem.appendChild(menuItems);
    });
    dropdownMenuItem.hidden = true;
    dropdown.appendChild(dropdownMenuItem);
    return dropdown;
  };

  const renderTriggerBtn = () => {
    const triggerBtn = elementUtil.createElement(dropdownTriggerBtnAttr);
    triggerBtn.addEventListener("click", handleTriggerClick);
    return triggerBtn;
  };

  const handleTriggerClick = () => {
    const dropdownMenuItem = document.querySelector(".dropdownMenuItem");
    dropdownMenuItem.hidden = !dropdownMenuItem.hidden;
  };

  const renderMenuItems = (menuItems) => {
    const dropdownMenuItems = menuItems.map((item) => {
      const menuItem = elementUtil.createElement(dropdownMenuItemsAttr);
      elementUtil.appendTextToElement(menuItem, item);
      return menuItem;
    });
    return dropdownMenuItems;
  };

  return renderDropdown();
};

export default dropdown;
