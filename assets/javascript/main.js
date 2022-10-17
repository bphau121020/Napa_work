var lists = document.querySelectorAll(".navbar__center__list-items li");

lists.forEach((li) => {
  li.addEventListener("click", () => {
    resetList();
    li.classList.add("active");
  });
});
function resetList() {
  lists.forEach((li) => {
    li.classList.remove("active");
  });
}

const load = document.querySelector(".load-more");
const hide = document.querySelector(".show-less");
let showCount = 4;
let hideCount = 7;
load.addEventListener("click", () => {
  let show = [...document.querySelectorAll(".main__left-content__lists li")];
  for (let i = showCount; i <= showCount + 6; i++) {
    show[i].style.display = "flex";
    load.style.display = "none";
    hide.style.display = "flex";
  }
  showCount += 4;
});
hide.addEventListener("click", () => {
  let show = [...document.querySelectorAll(".main__left-content__lists li")];
  for (let i = hideCount; i <= hideCount + 2 ; i++) {
    show[i].style.display = "none";
    load.style.display = "flex";
    hide.style.display = "none";
  }
  hideCount += 0;
});
