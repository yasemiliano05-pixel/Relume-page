const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const MobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function() {
    MobileMenu.classList.add("flex")
})

closeButton.addEventListener("click", function(){
    MobileMenu.classList.remove("flex");
})