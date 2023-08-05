let masonryNew;
window.onload = () => {
  const grid = document.querySelector(".main_gallery_contaiter");
  const masonry = new Masonry(grid, {
    itemSelector: ".main_gallery_contaiter_item",
    layoutMode: "fitRows",
  });
  masonryNew = masonry;
};
