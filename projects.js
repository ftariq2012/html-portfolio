const projectSliders = {
  "bulk-pdf": [
    {
      src: "assets/Project1/Merge.png",
      caption: "Merge PDFs screen",
    },
    {
      src: "assets/Project1/Swap.png",
      caption: "Swap pages screen",
    },
    {
      src: "assets/Project1/Add.png",
      caption: "Add page screen",
    },
    {
      src: "assets/Project1/Stamp.png",
      caption: "Stamp / watermark screen",
    },
    {
      src: "assets/Project1/Logs.png",
      caption: "Logs and completion screen",
    },
  ],
};

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const sliderName = slider.dataset.slider;
  const images = projectSliders[sliderName];
  const imageElement = slider.querySelector("[data-slider-image]");
  const captionElement = slider.querySelector("[data-slider-caption]");
  const dotsContainer = slider.querySelector("[data-slider-dots]");
  const buttons = slider.querySelectorAll("[data-direction]");
  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    imageElement.src = images[currentIndex].src;
    imageElement.alt = images[currentIndex].caption;
    captionElement.textContent = images[currentIndex].caption;

    dotsContainer.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentIndex);
      dot.setAttribute("aria-pressed", dotIndex === currentIndex);
    });
  }

  images.forEach((image, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `View ${image.caption}`);
    dot.setAttribute("aria-pressed", index === 0);

    dot.addEventListener("click", () => {
      showImage(index);
    });

    dotsContainer.appendChild(dot);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction === "next" ? 1 : -1;
      showImage(currentIndex + direction);
    });
  });

  showImage(0);
});
