const list = document.querySelector(".product-photos-list");
const productPhoto = document.querySelector(".product-photo");
const nextButton = document.querySelector(".product-photo-button[next]");
const prevButton = document.querySelector(".product-photo-button[prev]");
let photoIndex = 0;

const handleUpdateListAttributesByEvent = (list, event) => {
  Array.from(list.children).forEach((element) => {
    const image = element.querySelector("img");
    if (image === event.target) {
      element.setAttribute("selected", "");
      productPhoto.setAttribute("src", image.src);
    } else {
      element.removeAttribute("selected");
    }
  });
};

const handleUpdateListAttributesByIndex = (list, indexToUpdate) => {
  Array.from(list.children).forEach((element, index) => {
    const image = element.querySelector("img");
    if (index === indexToUpdate) {
      element.setAttribute("selected", "");
      productPhoto.setAttribute("src", image.src);
    } else {
      element.removeAttribute("selected");
    }
  });
};

list.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  handleUpdateListAttributesByEvent(list, event);
});

nextButton.addEventListener("click", () => {
  photoIndex = photoIndex === list.children.length - 1 ? 0 : photoIndex + 1;
  handleUpdateListAttributesByIndex(list, photoIndex);
});

prevButton.addEventListener("click", () => {
  photoIndex = photoIndex === 0 ? list.children.length - 1 : photoIndex - 1;
  handleUpdateListAttributesByIndex(list, photoIndex);
});
