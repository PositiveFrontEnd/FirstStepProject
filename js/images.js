const images = [
  {
    category: ".web_design",
    img: "./imgs/Work/createNewPhoto/1.jpg",
  },
  {
    category: ".web_design",
    img: "./imgs/Work/createNewPhoto/2.jpg",
  },
  {
    category: ".web_design",
    img: "./imgs/Work/createNewPhoto/3.jpg",
  },
  {
    category: ".wordpress",
    img: "./imgs/Work/createNewPhoto/4.jpg",
  },
  {
    category: ".wordpress",
    img: "./imgs/Work/createNewPhoto/5.jpg",
  },
  {
    category: ".wordpress",
    img: "./imgs/Work/createNewPhoto/6.jpg",
  },
  {
    category: ".landing_pages",
    img: "./imgs/Work/createNewPhoto/7.jpg",
  },
  {
    category: ".landing_pages",
    img: "./imgs/Work/createNewPhoto/8.jpg",
  },
  {
    category: ".landing_pages",
    img: "./imgs/Work/createNewPhoto/9.jpg",
  },
  {
    category: ".graphic_desing",
    img: "./imgs/Work/createNewPhoto/10.jpg",
  },
  {
    category: ".graphic_desing",
    img: "./imgs/Work/createNewPhoto/11.jpg",
  },
  {
    category: ".graphic_desing",
    img: "./imgs/Work/createNewPhoto/12.jpg",
  },
];
const bestImages = [
  {
    category: "bestImage",
    img: "./imgs/Gallery/1.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/2.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/3.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/6.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/2.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/8.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/3.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/9.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/1.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/2.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/2.png",
  },
  {
    category: "bestImage",
    img: "./imgs/Gallery/1.png",
  },
];
function infoCard(category) {
  const card = document.createElement("div");
  card.classList.add("main_work_box_pictures_design_pictures");
  const link = document.createElement("a");
  link.href = "#";
  const cardTitel = document.createElement("span");
  cardTitel.classList.add("main_work_box_pictures_design_pictures_text_green");
  cardTitel.innerText = "Creative Design";
  let cardText = document.createElement("span");
  cardText.classList.add("main_work_box_pictures_design_pictures_text_white");
  cardText.innerText = category;
  const cardImg = document.createElement("img");
  cardImg.classList.add("main_work_box_pictures_design_pictures_link_svg");
  cardImg.src = "./imgs/Work/icon.png";
  card.append(link);
  link.append(cardImg);
  link.append(cardTitel);
  link.append(cardText);
  return card;
}

function createPhotoGallery(imgSrc) {
  const box = document.createElement("div");
  box.classList.add("main_gallery_contaiter_item");
  const image = document.createElement("img");
  image.classList.add("main_gallery_box_img");
  image.src = imgSrc;
  box.append(image);
  return box;
}
function createAnimation() {
  const animationPush = document.createElement("div");
  animationPush.classList.add("middle");
  const bar1 = document.createElement("div");
  bar1.classList.add("bar", "bar1");
  const bar2 = document.createElement("div");
  bar2.classList.add("bar", "bar2");
  const bar3 = document.createElement("div");
  bar3.classList.add("bar", "bar3");
  const bar4 = document.createElement("div");
  bar4.classList.add("bar", "bar4");
  const bar5 = document.createElement("div");
  bar5.classList.add("bar", "bar5");
  const bar6 = document.createElement("div");
  bar6.classList.add("bar", "bar6");
  const bar7 = document.createElement("div");
  bar7.classList.add("bar", "bar7");
  const bar8 = document.createElement("div");
  bar8.classList.add("bar", "bar8");
  animationPush.append(bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8);
  return animationPush;
}
const pushAnimation = createAnimation();
