const filtersList = document.querySelector(".filters-list");

filtersList.addEventListener("click", (event) => {
  if (event.target.tagName !== "DIV") return;
  const node = Array.from(filtersList.children).find((listItem) =>
    Array.from(listItem.children).includes(event.target)
  );

  Array.from(filtersList.children).forEach((listItem) => {
    if (listItem === node) {
      const subList = listItem.querySelector(".filters-list-item-sub-list");
      const icon = listItem.querySelector(".filters-list-item-arrow");
      if (subList.classList.contains("filters-list-item-sub-list-hidden")) {
        subList.classList.remove("filters-list-item-sub-list-hidden");
        icon.setAttribute("src", "./assets/up-icon.svg");
      } else {
        subList.classList.add("filters-list-item-sub-list-hidden");
        icon.setAttribute("src", "./assets/down-icon.svg");
      }
    }
  });
});
