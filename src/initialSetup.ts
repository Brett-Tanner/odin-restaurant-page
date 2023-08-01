import Beans from "./images/beans.jpg";
import Cake from "./images/cake.jpg";
import Cheese from "./images/cheese.jpg";
import CheesyBrett from "./images/noodles.jpg";
import FanCay from "./images/fan_cay.jpg";
import HappyBirthday from "./images/happyBirthday.jpg";
import NewYear from "./images/NewYear.jpg";
import Noodles from "./images/noodles.jpg";
import Pho from "./images/pho.jpg";
import Vika from "./images/vika.jpg";
import Yoghurt from "./images/yoghurt.jpg";

const main = document.getElementById("content");
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

function addHeading(text: string, headingSize: heading = "h1") {
  const heading = document.createElement(headingSize);
  heading.innerText = text;
  main?.appendChild(heading);
}

function addImage(path: string) {
  const img = document.createElement("img");
  img.src = path;
  img.width = 200;
  main?.appendChild(img);
}

function addBlurb(text: string) {
  const blurb = document.createElement("p");
  blurb.innerText = text;
  main?.appendChild(blurb);
}

export function generatePage() {
  addHeading("Welcome to Vika's fine dining!", "h1");
  foodPics.forEach((pic) => {
    addImage(pic);
  });
  addBlurb(
    "Our restaurant offers a range of fine dining experiences, all prepared by our expert chef Viktoriia Kasimova. If you're lucky you might even spot a wild Brett grazing on some of our delicacies, in between eating his staple meal of rice and unflavoured chicken!"
  );
}
