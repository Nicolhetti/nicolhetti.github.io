const hoverSound = new Audio("sounds/hover.mp3");
const clickSound = new Audio("sounds/click.mp3");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Video Play
document.addEventListener("click", function (event) {
  let video = document.getElementById("bgVideo");
  let audioMessage = document.getElementById("audioMessage");

  if (event.target.tagName.toLowerCase() === "a") {
    return;
  }

  if (video.muted) {
    video.muted = false;
    audioMessage.classList.add("hidden");
  }
});
