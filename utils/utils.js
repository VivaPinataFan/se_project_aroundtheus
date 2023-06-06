function openPopup(popup) {
    popup.classList.add("modal_opened");
    document.addEventListener("keydown", closeModalWithEsc);
  }

  const closeModalWithEsc = (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector(".modal_opened");
      closePopup(openModal);
    }
  };

  function clickOutPopup(modal) {
    modal.addEventListener("mousedown", function (e) {
      if (e.target === e.currentTarget) {
        closePopup(modal);
      }
    });
  }

  function closePopup(popup) {
    popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", closeModalWithEsc);
  }