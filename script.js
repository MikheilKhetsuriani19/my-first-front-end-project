const navbar = document.getElementById("navbar");
const mobileNav = document.querySelector(".mobile-nav");
const burgerMenu = document.querySelector(".burger-menu");
const signupBtn = document.querySelector(".sub-card button")
const overlay = document.querySelector(".overlay")

burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


signupBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
  document.body.classList.add("no-scroll");
});

closeSignup.addEventListener("click", hideSignup);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) hideSignup();
});

function hideSignup() {
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
}



const myAPI = 'https://694c24b2da5ddabf00362fc4.mockapi.io/itstep'
const form = document.querySelector(".contact-form")
const inputs = document.querySelectorAll(".input_message")
const imgs = document.querySelectorAll(".team-member img")

form.addEventListener("submit", async (e)=>{
        e.preventDefault()
        let newUser = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    }
    
    try{
        const resp = await fetch(myAPI, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        let result = await resp.json() //პასუხი სერვერიდან

        if(!resp.ok){
            danger(result.error)
        } else{
            alert("succeced")
            console.log(result)
        }
        

    }   catch(error){
        console.error(error)
    }
    
})


 

