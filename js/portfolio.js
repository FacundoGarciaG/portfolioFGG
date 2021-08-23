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

