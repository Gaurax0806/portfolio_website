const education_selector = document.querySelector("#edu");
const skill_selector = document.querySelector("#skill");

const education_detail = document.querySelector(".education_container");
const skill_detail = document.querySelector(".skill_container");

education_selector.addEventListener("click", () => {
  education_selector.classList.add("focusbutton");
  skill_selector.classList.remove("focusbutton");

  education_detail.classList.remove("hidden");
  skill_detail.classList.add("hidden");
});

skill_selector.addEventListener("click", () => {
  skill_selector.classList.add("focusbutton");
  education_selector.classList.remove("focusbutton");

  skill_detail.classList.remove("hidden");
  education_detail.classList.add("hidden");
});
