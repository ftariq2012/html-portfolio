document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("[data-typewriter]");

  if (!heading) {
    return;
  }

  const fullText = heading.textContent;
  let charIndex = 0;
  const typingSpeed = 120;

  heading.textContent = "";

  function typeWriter() {
    if (charIndex >= fullText.length) {
      return;
    }

    heading.textContent += fullText.charAt(charIndex);
    charIndex++;
    window.setTimeout(typeWriter, typingSpeed);
  }

  typeWriter();
});
