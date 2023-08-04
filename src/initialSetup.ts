// Import all my images
import Beans from "./images/beans.jpg";
import Cake from "./images/cake.jpg";
import Cheese from "./images/cheese.jpg";
import CheesyBrett from "./images/cheesyBrett.jpg";
import FanCay from "./images/fan_cay.jpg";
import HappyBirthday from "./images/happyBirthday.jpg";
import NewYear from "./images/NewYear.jpg";
import Noodles from "./images/noodles.jpg";
import Pho from "./images/pho.jpg";
import Vika from "./images/vika.jpg";
import Yoghurt from "./images/yoghurt.jpg";

// Import Tailwind styles
import "./style.css";

const main = document.getElementById("content");
const gallery = document.getElementById("gallery");
const foodPics = [
  Beans,
  Cake,
  Cheese,
  CheesyBrett,
  FanCay,
  HappyBirthday,
  NewYear,
  Noodles,
  Pho,
  Vika,
  Yoghurt,
];

type heading = "h1" | "h2" | "h3" | "h4" | "h5";

function addBlurb(text: string) {
  const blurb = document.createElement("p");
  blurb.innerText = text;
  blurb.classList.add(
    "text-amber-700",
    "text-center",
    "font-body",
    "text-2xl",
    "basis-1/4",
    "grow",
    "p-12"
  );
  main?.appendChild(blurb);
}

function addImage(path: string, rows: HTMLCollection | undefined) {
  const img = document.createElement("img");
  img.src = path;
  img.width = 200;
  img.classList.add(
    "h-auto",
    "max-w-full",
    "rounded-lg",
    "hover:scale-105",
    "transition-transform",
    "duration-300"
  );
  const div = document.createElement("div");
  div.appendChild(img);
  const designatedRow = Math.floor(foodPics.indexOf(path) / 4);
  if (rows) {
    if (!rows[designatedRow]) {
      throw new Error("Row missing");
    }
    rows[designatedRow].appendChild(div);
  } else {
    gallery?.appendChild(div);
  }
}

function addNav() {
  const nav = document.createElement("nav");
  nav.classList.add("flex", "flex-col", "gap-4", "self-start", "grow");
  const menu = document.createElement("a");
  menu.innerText = "Menu";
  menu.id = "menuLink";
  const contact = document.createElement("a");
  contact.innerText = "Contact";
  contact.id = "contactLink";
  [menu, contact].forEach((link) => {
    link.href = "#";
    link.classList.add(
      "font-heading",
      "text-amber-700",
      "text-2xl",
      "p-4",
      "hover:text-amber-950",
      "hover:bg-amber-700",
      "active:bg-amber-800",
      "transition-all",
      "duration-300"
    );
  });
  nav.append(menu, contact);
  main?.prepend(nav);
}

function addRows(picArray: any[]) {
  const numRows = Math.ceil(picArray.length / 4);
  for (let index = 0; index < numRows; index++) {
    const div = document.createElement("div");
    div.classList.add("grid", "gap-3");
    gallery?.appendChild(div);
  }
  return gallery?.children;
}

export function generatePage() {
  addNav();
  const rows = addRows(foodPics);
  foodPics.forEach((pic) => {
    addImage(pic, rows);
  });
  addBlurb(
    "Our restaurant offers a range of fine dining experiences, all prepared by expert chef Viktoriia Kasimova. If you're lucky you may even witness a wild Brett grazing on our delicacies, in between his staple meals of rice and unflavoured chicken!"
  );
}
