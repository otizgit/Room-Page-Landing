const carouselImageTrack = document.querySelector(".carousel-img-track");
const imageslides = Array.from(carouselImageTrack.children);
const carouselContentTrack = document.querySelector(".carousel-content-track");
const contentSlides = Array.from(carouselContentTrack.children);
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// ! Get bounding width of the image slide and content slide:
const imageSlideWidth = imageslides[0].getBoundingClientRect().width;
const contentSlideWidth = contentSlides[0].getBoundingClientRect().width;

// ? Arrange image slide next to one another:
function setImageSlidePosition(imageSlide, index) {
  imageSlide.style.left = imageSlideWidth * index + "px";
}
imageslides.forEach(setImageSlidePosition);
// ? Arrange content slide next to each other:
function setContentSlidePosition(contentSlide, index) {
  contentSlide.style.left = contentSlideWidth * index + "px";
}
contentSlides.forEach(setContentSlidePosition);

// * The Moving function:
function moveImageSlide(track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("image-current-slide");
  targetSlide.classList.add("image-current-slide");
}
function moveContentSlide(track, currentSlide, targetSlide) {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("content-current-slide");
  targetSlide.classList.add("content-current-slide");
}

// ! Hide and show arrows:
const hideShowArrows = (contentSlides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === contentSlides.length - 1) {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

// Clicking the next button:
nextBtn.addEventListener("click", function (e) {
  const imageCurrentSlide = carouselImageTrack.querySelector(
    ".image-current-slide"
  );
  const contentCurrentSlide = carouselContentTrack.querySelector(
    ".content-current-slide"
  );
  const imageNextSlide = imageCurrentSlide.nextElementSibling;
  const contentNextSlide = contentCurrentSlide.nextElementSibling;
  moveContentSlide(carouselContentTrack, contentCurrentSlide, contentNextSlide);
  moveImageSlide(carouselImageTrack, imageCurrentSlide, imageNextSlide);

  const contentNextIndex = contentSlides.findIndex(
    (contentSlide) => contentSlide === contentNextSlide
  );
  hideShowArrows(contentSlides, prevBtn, nextBtn, contentNextIndex);
});

// Clicking the previous button:
prevBtn.addEventListener("click", function (e) {
  const imageCurrentSlide = carouselImageTrack.querySelector(
    ".image-current-slide"
  );
  const contentCurrentSlide = carouselContentTrack.querySelector(
    ".content-current-slide"
  );
  const imagePrevSlide = imageCurrentSlide.previousElementSibling;
  const contentPrevSlide = contentCurrentSlide.previousElementSibling;
  moveContentSlide(carouselContentTrack, contentCurrentSlide, contentPrevSlide);
  moveImageSlide(carouselImageTrack, imageCurrentSlide, imagePrevSlide);
  const contentPrevIndex = contentSlides.findIndex(
    (contentSlide) => contentSlide === contentPrevSlide
  );
  hideShowArrows(contentSlides, prevBtn, nextBtn, contentPrevIndex);
});

// ! Hamburger functionality:
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const listItems = document.querySelector("nav ul");
const lists = document.querySelectorAll('.lists')

hamburger.addEventListener("click", function () {
  listItems.classList.add("display-nav");
  lists.forEach(function(list){
    list.classList.add('display-list')
    list.classList.remove('hide-list')
  })
});

close.addEventListener("click", function () {
  listItems.classList.remove("display-nav");
  lists.forEach(function(list){
    list.classList.remove('display-list')
    list.classList.add('hide-list')
  })
});
