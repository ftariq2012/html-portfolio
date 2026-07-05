const contactCaptcha = document.getElementById("contactCaptcha");
const captchaAnswer = document.getElementById("captchaAnswer");
const captchaMessage = document.getElementById("captchaMessage");
const privateContactInfo = document.getElementById("privateContactInfo");

const protectedContact = {
  email: ["faraztariq05", "gmail", "com"],
  phone: ["+1", "647", "308", "4849"],
};

function getEmailAddress() {
  return `${protectedContact.email[0]}@${protectedContact.email[1]}.${protectedContact.email[2]}`;
}

function getPhoneNumber() {
  return `${protectedContact.phone[0]} (${protectedContact.phone[1]}) ${protectedContact.phone[2]}-${protectedContact.phone[3]}`;
}

if (contactCaptcha) {
  contactCaptcha.addEventListener("submit", (event) => {
    event.preventDefault();

    if (Number(captchaAnswer.value) !== 12) {
      captchaMessage.textContent = "Almost. Try the math check again.";
      captchaAnswer.focus();
      return;
    }

    const emailAddress = getEmailAddress();
    const phoneNumber = getPhoneNumber();

    document.querySelector('[data-contact-value="email"]').textContent =
      emailAddress;
    document.querySelector('[data-contact-link="email"]').href =
      `mailto:${emailAddress}`;

    document.querySelector('[data-contact-value="phone"]').textContent =
      phoneNumber;
    document.querySelector('[data-contact-link="phone"]').href =
      `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;

    privateContactInfo.hidden = false;
    captchaMessage.textContent = "Verified. Direct contact info is now visible.";
    contactCaptcha.querySelector("button").disabled = true;
  });
}
