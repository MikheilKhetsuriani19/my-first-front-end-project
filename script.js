const navbar = document.getElementById("navbar");
const mobileNav = document.querySelector(".mobile-nav");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".form-register-close svg")
const signUpForm = document.querySelector(".overlay")
const subCardBtns = document.querySelectorAll(".sub-card button")
const myAPI = 'https://694c24b2da5ddabf00362fc4.mockapi.io/itstep'




function burgerMenuAppear(){
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


const subCardBtn = document.querySelector(".sub-card button");

if (subCardBtn) {
  subCardBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
    document.body.classList.add("no-scroll");
  });
}



signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll(".registering input")


  let newUser = {
    "id": inputs[0].value,
    "email": inputs[1].value,
    "password": inputs[2].value
  }
  try {
    const resp = await fetch(myAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json"

      },
      body: JSON.stringify(newUser)
    })

    const result = await resp.json();
    if (!resp.ok) {
      console.log(result.error)
    }
    else {
      alert("succeced")
      console.log(result)
    }

  } catch (error) {
    console.error(error);
  }
})

closeBtn.addEventListener("click", hideSignup);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) hideSignup();
});



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





