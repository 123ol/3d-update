

document
  .querySelector(".popup7 .close-btn")
  .addEventListener("click", function  myFunction() {
    document.querySelector(".popup7").classList.remove("active");
    console.log("work")
  });