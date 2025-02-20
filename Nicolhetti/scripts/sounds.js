const hoverSound = new Audio("sounds/hover.mp3");
const clickSound = new Audio("sounds/click.mp3");

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
