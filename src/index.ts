import { generateContact } from "./contact";
import { generateHome } from "./initialSetup";
import { generateMenu } from "./menu";

const main = document.getElementById("content");

const contactLink = document.getElementById("contactLink");
contactLink?.addEventListener("click", (e) => {
  e.preventDefault();
  if (main) {
    generateContact(main);
  } else {
    throw new Error("Main is missing");
  }
});
const homeLink = document.getElementById("homeLink");
homeLink?.addEventListener("click", (e) => {
  e.preventDefault();
  if (main) {
    generateHome(main);
  } else {
    throw new Error("Main is missing");
  }
});
const menuLink = document.getElementById("menuLink");
menuLink?.addEventListener("click", (e) => {
  e.preventDefault();
  if (main) {
    generateMenu(main);
  } else {
    throw new Error("Main is missing");
  }
});

if (main) {
  generateHome(main);
} else {
  throw new Error("Main is missing");
}
