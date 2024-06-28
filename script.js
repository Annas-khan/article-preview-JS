const shareMenuTrigger = document.querySelector("button");
const shareMenu = document.querySelector(".share-menu");

shareMenuTrigger.addEventListener("click", () => {
    shareMenu.classList.toggle("share-menu--open");
})