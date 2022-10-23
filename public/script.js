const buttons = document.querySelectorAll(".footer-ul");


buttons.forEach((item) => {
  const header = item.querySelector(".footer-ul-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

 
    const footerList = item.querySelectorAll(".footer-up-ul");
   

    if (item.classList.contains("open")) {
      footerList.forEach((list) => {
        list.style.height = `${list.scrollHeight}px`;
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(180deg)";
      });
    } else {
      footerList.forEach((list) => {
        list.style.height = "0px";
        list.previousElementSibling.firstElementChild.nextElementSibling.style.transform =
          "rotate(360deg)";
      });
    }
  });
});

const navBtn = document.querySelector(".hamburger");
const homeImg = document.querySelector(".grid1-img");
const navMobil = document.querySelector(".navbar-mobil");

navBtn.addEventListener("click", () => {
  navMobil.classList.toggle("mobil");
  if (navMobil.classList.contains("mobil")) {
    homeImg.style.filter = "blur(2px)";
    navMobil.style.display = "flex";
  } else {
    homeImg.style.filter = "blur(0)";
    navMobil.style.display = "none";
  }
});