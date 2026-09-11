/* =====================================
   CASE STUDY — SMALL INTERACTIONS
===================================== */


/* =====================================
   SIDE INDEX ACTIVE STATE
===================================== */

const sections = document.querySelectorAll(
  "section[id]"
);

const indexLinks = document.querySelectorAll(
  ".side-index a"
);


const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      indexLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {

          link.classList.add("active");

        }

      });

    });

  },

  {
    threshold: 0.35
  }

);


sections.forEach(section => {

  observer.observe(section);

});


/* =====================================
   SMOOTH SIDE INDEX
===================================== */

indexLinks.forEach(link => {

  link.addEventListener("click", event => {

    const targetID =
      link.getAttribute("href");

    const target =
      document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

});


/* =====================================
   IMAGE LOAD FADE
===================================== */

const campaignImages =
  document.querySelectorAll(".piece-image img");


campaignImages.forEach(image => {

  image.style.opacity = "0";

  image.style.transition =
    "opacity .5s ease";


  if (image.complete) {

    image.style.opacity = "1";

  } else {

    image.addEventListener("load", () => {

      image.style.opacity = "1";

    });

  }

});


/* =====================================
   SUBTLE SCROLL REVEALS
===================================== */

const revealItems = document.querySelectorAll(
  ".campaign-piece, .metric, .why-grid > div, .table-row"
);


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("revealed");

        revealObserver.unobserve(entry.target);

      });

    },

    {
      threshold: 0.15
    }

  );


revealItems.forEach(item => {

  item.classList.add("reveal-ready");

  revealObserver.observe(item);

});


/* =====================================
   PREVENT BROKEN CAMPAIGN IMAGES
===================================== */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("error", () => {

    image.style.background = "#E7BEF8";

    image.style.minHeight = "150px";

  });

});