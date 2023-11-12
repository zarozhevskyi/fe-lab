const cartList = document.querySelector(".cart-list");

cartList.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  Array.from(cartList.children).forEach((cartItem) => {
    const deleteImage = cartItem.querySelector(".cart-list-item-button > img");
    if (deleteImage === event.target) {
      cartItem.remove();
    }
  });
});
