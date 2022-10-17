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
let showCount = 4;
load.addEventListener("click", () => {
  let show = [...document.querySelectorAll(".main__left-content__lists li")];
  for (let i = showCount; i <= showCount + 5; i++) {
    show[i].style.display = "flex";
  }
  showCount += 4;
});
