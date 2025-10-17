import Swiper from 'swiper/bundle';

const reviewCardsContainer = document.querySelector(".reviews-cards");
const cardTemp = document.getElementById("reviews-cards").content;

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
  }
];

reviewCardsData.forEach((item) => {
  const cloneCard = cardTemp.cloneNode(true);
  const reviewCard = cloneCard.firstElementChild;

  Object.entries(item.textContent).forEach(([key, value]) => {
    reviewCard.querySelector(`.${key}`).textContent = value;
  });

  Object.entries(item.setAttribute).forEach(([className, value]) => {
    Object.keys(value).forEach((attribute) => {
      reviewCard
        .querySelector(`.${className}`)
        .setAttribute(attribute, value[attribute]);
    });
  });

  reviewCardsContainer.appendChild(reviewCard);
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
