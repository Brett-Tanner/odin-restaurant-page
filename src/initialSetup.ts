// Import Tailwind styles
import "./style.css";

// Import food pics
import { foodPics } from "./images";

function addBlurb(text: string, main: HTMLElement) {
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
  main.appendChild(blurb);
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
  }
}

function createGallery(picArray: any[], main: HTMLElement) {
  const gallery = document.createElement("div");
  gallery.classList.add("grid", "grid-cols-2", "md:grid-cols-3", "gap-3");
  const numRows = Math.ceil(picArray.length / 4);
  for (let index = 0; index < numRows; index++) {
    const div = document.createElement("div");
    div.classList.add("grid", "gap-3");
    gallery.appendChild(div);
  }
  main.appendChild(gallery);
  return gallery.children;
}

export function generateHome(main: HTMLElement) {
  main.innerHTML = "";
  const rows = createGallery(foodPics, main);
  foodPics.forEach((pic) => {
    addImage(pic, rows);
  });
  addBlurb(
    "Our restaurant offers a range of fine dining experiences, all prepared by expert chef Viktoriia Kasimova. If you're lucky you may even witness a wild Brett grazing on our delicacies, in between his staple meals of rice and unflavoured chicken!",
    main
  );
}
