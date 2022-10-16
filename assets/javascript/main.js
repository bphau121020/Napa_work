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
