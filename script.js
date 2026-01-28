const navbar = document.getElementById("navbar");
const mobileNav = document.querySelector(".mobile-nav");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".form-register-close svg")
const signUpForm = document.querySelector(".overlay")
const subCardBtns = document.querySelectorAll(".sub-card button")
const myAPI = 'https://694c24b2da5ddabf00362fc4.mockapi.io/itstep'




function burgerMenuAppear() {
  burgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}


burgerMenuAppear()



window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const subCardBtn = document.querySelectorAll(".sub-card button");
const header = document.querySelector("header")

if (subCardBtn) {
  subCardBtn.forEach((button) => {
    button.addEventListener("click", () => {
      overlay.style.display = "flex";
      document.body.classList.add("no-scroll");
    })
  })
}






function hideSignup() {
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
}




const inputsMessage = document.querySelectorAll(".input_message")
const imgs = document.querySelectorAll(".team-member img")
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const messageInputs = document.querySelectorAll(".input_message");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newForm = {
      name: messageInputs[0].value,
      email: messageInputs[1].value,
      message: messageInputs[2].value
    };

    try {
      const resp = await fetch(myAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newForm)
      });

      const result = await resp.json();

      if (!resp.ok) {
        console.error(result.error);
      } else {
        alert("Succeeded");
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  });
}





/**
 * Consolidated Scroll Animation Engine
 * Handles staggered reveals and intersection detection
 */
const initAppAnimations = () => {
  const observerOptions = {
    threshold: 0.12, // Element is 12% visible
    rootMargin: "0px 0px -20px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // Handle Staggering: if items are in the same container, delay them
        const parent = el.parentElement;
        const peers = Array.from(parent.querySelectorAll('[class*="reveal"]'));
        const index = peers.indexOf(el);

        if (index !== -1) {
          el.style.transitionDelay = `${index * 0.15}s`;
        }

        el.classList.add("active-reveal");
        observer.unobserve(el); // Clean up memory after animation
      }
    });
  }, observerOptions);

  // Target all our custom reveal classes
  const animTargets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-skew-left, .reveal-skew-right');
  animTargets.forEach((target) => observer.observe(target));
};

// Start animations when page is ready
document.addEventListener("DOMContentLoaded", initAppAnimations);


const ADMIN = {
  email: "admin@softlanding.com",
  password: "Admin123$"
};

const closeBtn1 = document.querySelector(".form-register-close1 svg")
const adminInputs = document.querySelectorAll(".registering1 input")
const adminPanelBtn = document.querySelector(".contact button")
const adminPanelNav = document.querySelector(".admin-panel-nav")
const overlay1 = document.querySelector(".overlay1")
const logoutBtn = document.querySelector(".logout-btn")


adminPanelBtn.addEventListener("click", () => {
  overlay1.style.display = "flex";
})
console.log(adminInputs[0])


overlay1.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = adminInputs[0].value.trim();
  const password = adminInputs[1].value.trim();

  if (email === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem("adminLoggedIn", "true");
    Swal.fire({
      title: "U logged in as an admin",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("download-ezgif.com-gif-maker.gif")
    left top
    no-repeat
  `
    });
    adminPanelNav.style.display = "inline";
    overlay1.style.display = "none";
    adminPanelBtn.style.display = "none";
    logoutBtn.style.display = "inline";

  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
})
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("adminLoggedIn") === "true") {
    adminPanelNav.style.display = "inline";
  }
});


function hideSignIn() {
  overlay1.style.display = "none";
  document.body.classList.remove("no-scroll");
}

closeBtn1.addEventListener("click", hideSignIn);
overlay1.addEventListener("click", (e) => {
  if (e.target === overlay1) hideSignIn();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("adminLoggedIn");
  adminPanelNav.style.display = "none";
  logoutBtn.style.display = "none";
  adminPanelBtn.style.display = "inline";
  Swal.fire("Logged out 👋");
});




document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("adminLoggedIn") === "true";

  if (isAdmin) {
    adminPanelNav.style.display = "inline";
    logoutBtn.style.display = "inline";
    adminPanelBtn.style.display = "none";
  } else {
    adminPanelNav.style.display = "none";
    logoutBtn.style.display = "none";
    adminPanelBtn.style.display = "inline";
  }
});


