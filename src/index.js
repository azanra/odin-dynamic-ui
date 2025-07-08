import dropdown from "./component/dropdown";
import imageCarousel from "./component/imageCarousel";
import "./style.css";

console.log("Hello world!");

const menuItems = ["First Action", "Second Action", "Third Action"];
document.body.appendChild(dropdown(menuItems));

const img = [
  "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
  "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg",
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
];
document.body.appendChild(imageCarousel(img));
