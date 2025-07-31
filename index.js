const heading = document.getElementsByClassName("main-heading")[0];
const fullText = heading.innerText;
let charIndex = 0;
const typingSpeed = 120;

heading.innerText = "";

function typeWriter() {
  if (charIndex < fullText.length) {
    heading.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = typeWriter;
