const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelector(".portfolio-filter .active")
      .classList.remove("active");

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {

      if(filter === "all" || item.classList.contains(filter)){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });

  });

});