" use strict ";
//form
let form = document.body.querySelector(".form");
let src = document.body.querySelector(".header_nav_box_info_link");
let click = 0;
src.onclick = function () {
  click++;
  if (click === 1) {
    form.style.display = "block";
  } else if (click === 2) {
    form.style.display = "none";
    click = 0;
  }
};
//Section Ous Services
const servicesLink = document.querySelectorAll(
  ".main_services_box_professions_list_link"
);
const servicesInfo = document.querySelectorAll(".main_services_box_info");
servicesLink.forEach((value) => {
  value.addEventListener("click", (event) => {
    event.preventDefault();
    let currectLinc = value;
    let tabId = currectLinc.getAttribute("data-target");
    let currectTub = document.querySelector(tabId);
    if (
      !currectTub.classList.contains("active") &&
      !currectTub.classList.contains("web_design_green")
    ) {
      servicesLink.forEach((value) => {
        value.classList.remove("web_design_green");
      });
      servicesInfo.forEach((value) => {
        value.classList.remove("active");
      });
      currectLinc.classList.add("web_design_green");
      currectTub.classList.add("active");
    }
  });
});

//Section Our Amazing Work
const card = document.querySelector(".main_work_box_pictures_design_pictures");
const buttonLoadMore = document.querySelector(".main_work_box_button");
const photoBox = document.querySelector(".main_work_box_pictures_design");
let arrOllPhoto = document.getElementsByClassName("main_work_box_picture");
const buttonBox = document.querySelector(".main_work_box_professions_list");
const spathenBox = document.querySelectorAll(
  ".main_work_box_pictures_design_spathe"
);
const boxLoadMore = document.querySelector(".main_work_box_button_load_more");
let ollPhoto = document.querySelectorAll(".main_work_box_picture");
let ollClassPhoto = ".all";
let count = 0;
function createBoxImage(category, imgSrc) {
  const image = document.createElement("img");
  image.classList.add("main_work_box_picture", "all", category);
  image.src = imgSrc;
  return image;
}
function createNewFoto(correctButton) {
  let filteredImages;
  if (correctButton === ".all") {
    filteredImages = images;
  } else {
    filteredImages = images.filter((img) => img.category === correctButton);
  }
  filteredImages.forEach((object) => {
    const createBoxImg = document.createElement("div");
    createBoxImg.classList.add("main_work_box_pictures_design_spathe");
    const cardInner = document.createElement("div");
    cardInner.classList.add("main_work_box_pictures_design_inner");

    const image = createBoxImage(object.category.slice(1), object.img);
    const cardInfo = infoCard(object.category.slice(1));
    cardInner.append(image, cardInfo);
    createBoxImg.append(cardInner);
    photoBox.append(createBoxImg);
  });
  if (count === 2) {
    buttonLoadMore.remove();
  }
}
buttonBox.addEventListener("click", (event) => {
  event.preventDefault();
  let correctButton = event.target.getAttribute("data-correct-photo");
  ollClassPhoto = correctButton;
  let correctFoto = document.querySelectorAll(correctButton);
  [...arrOllPhoto].forEach((img) => {
    const imgWrapper = img.parentElement.parentElement;
    if (!img.classList.contains(correctButton.slice(1))) {
      imgWrapper.classList.add("hide");
    } else {
      imgWrapper.classList.remove("hide");
    }
  });
});
buttonLoadMore.addEventListener("click", (event) => {
  boxLoadMore.append(pushAnimation);
  pushAnimation.style.display = "";
  pushAnimation.style.paddingBottom = "100px";
  buttonLoadMore.style.display = "none";
  count++;
  setTimeout(() => {
    createNewFoto(ollClassPhoto);
    pushAnimation.style.display = "none";
    buttonLoadMore.style.display = "";
  }, 2000);
});

//Section Our Amazing Work
const buttonArrow = document.querySelectorAll(".main_people_box_block_arrow");
const arrPersonnel = document.querySelectorAll(".main_people_box_block_foto");
const arrInfoPeoples = document.querySelectorAll(".main_people_box");
const arrInfoPeoplesImg = document.querySelectorAll(
  ".main_people_box_user_foto_block_img"
);
let intervalId = null;
function correctIndex(arr, string) {
  let a = [...arr].findIndex((element) => element.classList.contains(string));
  return a;
}
function updateClasses() {
  arrInfoPeoples[activeFoto].classList.remove("active_info");
  arrPersonnel[activeFoto].classList.remove("active_foto");
}
let activeFoto = correctIndex(arrPersonnel, "active_foto");
let activeInfo = correctIndex(arrInfoPeoples, "active_info");
buttonArrow.forEach((value) => {
  value.addEventListener("click", () => {
    let currectClickItem = value;
    let curectDataAtribute = currectClickItem.getAttribute("data-atribute");
    let index;
    if (curectDataAtribute === ".right") {
      index = 1;
    } else if (curectDataAtribute === ".left") {
      index = -1;
    }
    updateClasses();
    activeFoto += index;
    if (activeFoto < 0) {
      activeFoto = (activeFoto + arrPersonnel.length) % arrPersonnel.length;
    } else {
      activeFoto = activeFoto % arrPersonnel.length;
    }
    arrInfoPeoples[activeFoto].classList.add("active_info");
    arrPersonnel[activeFoto].classList.add("active_foto");
  });
});

arrPersonnel.forEach((value, index) => {
  value.addEventListener("click", () => {
    let clickFoto = value;
    const foto = document.querySelector(".active_foto");
    const info = document.querySelector(".active_info");
    if (foto !== clickFoto) {
      clickFoto.classList.add("active_foto");
      foto.classList.remove("active_foto");
      info.classList.remove("active_info");
      arrInfoPeoples[index].classList.add("active_info");
    }
    activeFoto = index;
    activeInfo = index;
  });
});

//Section Gallery of best images
const oll = document.getElementsByClassName("main_gallery_contaiter_item");
const galleryContainer = document.querySelector(".main_gallery_contaiter");
const galleryButton = document.querySelector(
  ".main_gallery_contaiter_load_button"
);
const animation = document.querySelector(".main_gallery_contaiter_load");
galleryButton.addEventListener("click", (event) => {
  galleryButton.style.display = "none";
  animation.append(pushAnimation);
  pushAnimation.style.display = "flex";
  setTimeout(() => {
    bestImages.forEach((object) => {
      const ollPhotoGallery = createPhotoGallery(object.img);
      galleryContainer.append(ollPhotoGallery);
      masonryNew.reloadItems();
      masonryNew.layout();
    });
    pushAnimation.style.display = "none";
    galleryButton.style.display = "block";
  }, 2000);
});
