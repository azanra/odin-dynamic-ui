import dropdown from "./component/dropdown";
import "./style.css";

console.log("Hello world!");

const menuItems = ["First Action", "Second Action", "Third Action"];
document.body.appendChild(dropdown(menuItems));
