/* HEADER HIDDEN WITH SCROLL */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

/* LINK CV ANIMATION */

const cv = document.getElementById("cv");

const moveCv = () => {
  cv.classList.add("animate__animated", "animate__jello");
  setTimeout(() => {
    cv.classList.remove("animate__animated", "animate__jello");
  }, 1000);
};

function myStartFunction() {
  setInterval(moveCv, 4000);
}

myStartFunction();

/* PROFILE PHOTO ANIMATION  */

const profile = document.querySelector(".profile");
const socialNetworks = document.querySelector(".socialNetworks");

const showSocial = () => {
  const isSocial = socialNetworks.classList.contains("social");

  if (isSocial) {
    socialNetworks.classList.remove("social");
    profile.classList.remove("filter");
  } else {
    socialNetworks.classList.add("social");
    profile.classList.add("filter");
  }
};

profile.addEventListener("click", showSocial);

/* FORM */

const $form = document.querySelector(".form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    const div = document.querySelector(".response");
    const greeting =
      '<p class="animate__animated animate__swing">Gracias por contactarme!</p>';
    div.innerHTML = greeting;
  }
}
