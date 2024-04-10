// First_page Javascript Begins

document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".logo-container");
    const content = document.querySelector("section");

    // Show the content after 10 seconds
    setTimeout(() => {
        logoContainer.style.display = "none";
        content.style.display = "flex";
    }, 10000); // 10000 milliseconds (10 seconds)
});

document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.form-input');

    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
});
// First_page Javascript Ends

// Aspirant_page Javascript Begins
const buttonClick = document.querySelector("#button_click");
const nav = document.querySelector("#nav_card");

buttonClick.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        buttonClick.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        nav.setAttribute("data-visible", false);
        buttonClick.setAttribute("aria-expanded", false);
    }
});
