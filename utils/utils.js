

export function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalWithEsc);
}

function closeModalWithEsc(e) {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closePopup(openModal);
  }
};

export function clickOutPopup(modal) {
  modal.addEventListener("mousedown", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(modal);
    }
  });
}

export function closePopup(popup) {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalWithEsc);
}
