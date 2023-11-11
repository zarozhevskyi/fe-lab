const list = document.querySelector(".product-photos-list");
const productPhoto = document.querySelector(".product-photo");

if (list && productPhoto) {
  list.addEventListener("click", (event) => {
    if (event.target.tagName !== "IMG") return;

    Array.from(list.children).forEach((element) => {
      const image = element.querySelector("img");
      if (image === event.target) {
        element.setAttribute("selected", "");
        productPhoto.setAttribute("src", image.src);
      } else {
        element.removeAttribute("selected");
      }
    });
  });
}
