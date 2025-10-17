import Swiper from "swiper/bundle";

const reviewCardsContainer = document.querySelector(".reviews-cards");
const reviewCardTemp = document.getElementById("reviews-cards").content;

const youtubeCardsContainer = document.querySelector(".youtube-container");
const youtubeCardTemp = document.getElementById("youtubeTemp").content;

const reviewCardsData = [
  {
    setAttribute: {
      overlayLink: { alt: "" },
      reviewsCardsLinkImg: {
        alt: "владимир, покупатель хонды",
        src: "./images/vladimir.png",
      },
    },
    textContent: {
      overlayTitle: "Владимир",
      overlayText: "Honda Fit 2019 год",
    },
  },
  {
    setAttribute: {
      overlayLink: { alt: "" },
      reviewsCardsLinkImg: {
        alt: "владимир, покупатель хонды",
        src: "./images/customer2.png",
      },
    },
    textContent: {
      overlayTitle: "Владимир",
      overlayText: "Honda Fit 2019 год",
    },
  },
  {
    setAttribute: {
      overlayLink: { alt: "" },
      reviewsCardsLinkImg: {
        alt: "владимир, покупатель хонды",
        src: "./images/customer3.png",
      },
    },
    textContent: {
      overlayTitle: "Владимир",
      overlayText: "Honda Fit 2019 год",
    },
  },
  {
    setAttribute: {
      overlayLink: { alt: "" },
      reviewsCardsLinkImg: {
        alt: "владимир, покупатель хонды",
        src: "./images/customer4.png",
      },
    },
    textContent: {
      overlayTitle: "Владимир",
      overlayText: "Honda Fit 2019 год",
    },
  },
];

const youtubeCardsData = [
  {
    setAttribute: {
      iframeCard: { src: "", frameborder: "0" },
    },
  },
  {
    setAttribute: {
      iframeCard: { src: "", frameborder: "0" },
    },
  },
  {
    setAttribute: {
      iframeCard: { src: "", frameborder: "0" },
    },
  },
  {
    setAttribute: {
      iframeCard: { src: "", frameborder: "0" },
    },
  },
];

const FillCardsTemp = (data, cardTemp, container) => {
  data.forEach((item) => {
    const cloneCard = cardTemp.cloneNode(true);
    const card = cloneCard.firstElementChild;

    if (item.textContent){
    Object.entries(item.textContent).forEach(([className, text]) => {
      card.querySelector(`.${className}`).textContent = text;
    });
  }
   if (item.setAttribute){
    Object.entries(item.setAttribute).forEach(([className, options]) => {
      Object.keys(options).forEach((attribute) => {
        card
          .querySelector(`.${className}`)
          .setAttribute(attribute, options[attribute]);
      });
    });
  }
    container.appendChild(card);
  });

};

FillCardsTemp(reviewCardsData,reviewCardTemp,reviewCardsContainer);
FillCardsTemp(youtubeCardsData,youtubeCardTemp,youtubeCardsContainer);

const reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const youtubeSwiper = new Swiper(".youtubeSwiper",{
  slidesPerView: "auto",
  navigation: {
    nextEl: ".youtubeSwiperButton-next",
    prevEl: ".youtubeSwiperButton-prev",
  },
})

