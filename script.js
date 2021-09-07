const resBtn = document.querySelector(".resources");
const modal = document.querySelector(".resourceModal");
const closeBtn = document.querySelector(".closeBtn");
const main = document.querySelector("main");
const overlay = document.getElementById("overlay");

//trap focus snippet taken from hiddedevries.nl
function openModal() {
  let focusableElements = modal.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), div[class="closeBtn"]'
  );
  let firstFocusableElement = focusableElements[0];
  let lastFocusableElement = focusableElements[focusableElements.length - 1];

  overlay.style.display = "block";
  modal.classList.add("open");
  firstFocusableElement.focus();
  closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", checkEsc);
  document.addEventListener("keydown", closeWithKeys);
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");

  modal.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab";

    if (!isTabPressed) {
      return;
    } else if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  });
}

resBtn.addEventListener("click", openModal);

function closeWithKeys(e) {
  if (e.key === "Enter") {
    closeModal();
  }
}

function checkEsc(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

function closeModal() {
  modal.classList.remove("open");
  overlay.style.display = "none";
}
