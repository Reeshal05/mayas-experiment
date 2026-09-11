/* ========================================
   MODAL SYSTEM
======================================== */

const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");


function openModal(id) {

  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("modal-open");

}


function closeModal(modal) {

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");

}


modalButtons.forEach(button => {

  button.addEventListener("click", () => {

    const modalID = button.dataset.modal;

    openModal(modalID);

  });

});


closeButtons.forEach(button => {

  button.addEventListener("click", () => {

    const modal = button.closest(".modal");

    closeModal(modal);

  });

});


/* Click outside modal */

modals.forEach(modal => {

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal(modal);
    }

  });

});


/* Escape key */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    modals.forEach(modal => {

      if (modal.classList.contains("active")) {
        closeModal(modal);
      }

    });

  }

});


/* ========================================
   CAMPAIGN TABS
======================================== */

const campaignData = {

  capsule: {
    image: "images/capsule.png",
    role: "DISCOVER",
    title: "THE CAPSULE",
    description:
      "Introduce versatile, student-friendly wardrobe pieces and show how much possibility they can create."
  },

  ways: {
    image: "images/three_ways.png",
    role: "EXPERIMENT",
    title: "ONE PIECE. THREE WAYS.",
    description:
      "Take one wardrobe staple and show how it can move across different plans, moods and everyday situations."
  },

  plans: {
    image: "images/plans.png",
    role: "ENGAGE",
    title: "WHAT'S YOUR PLAN?",
    description:
      "Turn outfit inspiration into a choice and invite the audience to participate in the styling conversation."
  }

};


const campaignTabs = document.querySelectorAll(".campaign-tab");

const campaignImage = document.getElementById("campaignImage");
const campaignRole = document.getElementById("campaignRole");
const campaignTitle = document.getElementById("campaignTitle");
const campaignDescription = document.getElementById("campaignDescription");


campaignTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const campaign = tab.dataset.campaign;

    const data = campaignData[campaign];

    if (!data) return;


    campaignTabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");


    campaignImage.style.opacity = "0";

    setTimeout(() => {

      campaignImage.src = data.image;
      campaignRole.textContent = data.role;
      campaignTitle.textContent = data.title;
      campaignDescription.textContent = data.description;

      campaignImage.style.opacity = "1";

    }, 150);

  });

});


/* ========================================
   STRATEGY INTERACTION
======================================== */

const strategySteps = document.querySelectorAll(".strategy-step");

const strategyDetail = document.querySelector(".strategy-detail");

const strategyContent = {

  0: {
    label: "THE INSIGHT ✷",
    title:
      "Students may not lack clothes. They may lack styling ideas.",
    text:
      "The campaign starts with a familiar student frustration: having clothes but feeling like there is nothing new to wear."
  },

  1: {
    label: "THE IDEA ✷",
    title:
      "Build less. Style more.",
    text:
      "The capsule wardrobe becomes less about minimalism and more about experimentation, versatility and finding new combinations."
  },

  2: {
    label: "THE ROLE OF CONTENT ✷",
    title:
      "Don't just show. Involve.",
    text:
      "Carousels educate, Reels inspire discovery and Stories create participation. The audience doesn't just watch the campaign — they play with it."
  }

};


strategySteps.forEach((step, index) => {

  step.addEventListener("click", () => {

    strategySteps.forEach(item => {
      item.classList.remove("active");
    });

    step.classList.add("active");


    const data = strategyContent[index];

    strategyDetail.innerHTML = `
      <span>${data.label}</span>

      <h3>${data.title}</h3>

      <p>${data.text}</p>
    `;

  });

});


/* ========================================
   LITTLE RANDOM FLOAT
======================================== */

const floatingElements = document.querySelectorAll(
  ".sticker, .scribble"
);


floatingElements.forEach((element, index) => {

  const duration = 3 + (index % 3);

  element.animate(
    [
      {
        transform: getComputedStyle(element).transform
      },
      {
        transform:
          getComputedStyle(element).transform +
          " translateY(-5px)"
      },
      {
        transform: getComputedStyle(element).transform
      }
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );

});