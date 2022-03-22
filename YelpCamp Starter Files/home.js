const form = document.querySelector(".form");
const input = document.querySelector(".input-container input");
const campgrounds = document.querySelectorAll(".campground");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
  input.value = "";
});

const search = () => {
  campgrounds.forEach((campground) => {
    if (
      !campground.children[1].innerText
        .toLowerCase()
        .includes(input.value.toLowerCase())
    ) {
      campground.style.display = "none";
    } else {
      campground.style.display = "block";
    }
  });
};
