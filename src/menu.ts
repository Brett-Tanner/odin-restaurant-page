// Import all the food images
import { foodPics } from "./images";

function addMenuItem(imagePath: string, main: HTMLElement) {
  const itemContainer = document.createElement("div");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("basis-3/5");
  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("w-full");
  itemContainer.appendChild(img);

  const blurb = document.createElement("p");
  blurb.innerText =
    "Wow, another superb meal by Viktoriia! It's hard to decide if her cooking ability, beauty or wit are more impressive!";
  blurb.classList.add(
    "text-amber-700",
    "text-center",
    "font-body",
    "text-2xl",
    "basis-2/5"
  );
  itemContainer.appendChild(blurb);

  itemContainer.classList.add(
    "flex",
    "items-center",
    "gap-4",
    "p-4",
    "w-4/5",
    "border-4",
    "border-amber-700",
    "border-double"
  );
  main.appendChild(itemContainer);
}

export function generateMenu(main: HTMLElement) {
  main.innerHTML = "";
  foodPics.forEach((pic) => {
    addMenuItem(pic, main);
  });
}
