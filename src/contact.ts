interface staff {
  name: string;
  role: string;
  email: string;
}

const staffFactory = (name: string, role: string, email: string) => {
  return { name, role, email };
};

const staff = [
  staffFactory("Viktoriia", "Head Chef", "bestgfeva@gmail.com"),
  staffFactory("Brett", "Web Developer", "bretttanner117@gmail.com"),
];

function addContactInfo(employee: staff, main: HTMLElement) {
  const card = document.createElement("div");
  for (const [key, value] of Object.entries(employee)) {
    const info = document.createElement("p");
    info.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
    card.appendChild(info);
  }
  card.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "basis-3/5",
    "gap-4",
    "p-4",
    "border-4",
    "border-amber-700",
    "border-double",
    "text-amber-700",
    "text-center",
    "font-body",
    "text-2xl"
  );
  main.appendChild(card);
}

export function generateContact(main: HTMLElement) {
  main.innerHTML = "";
  staff.forEach((employee) => {
    addContactInfo(employee, main);
  });
}
