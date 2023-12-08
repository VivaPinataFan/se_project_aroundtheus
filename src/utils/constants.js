export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileEditButton = document.querySelector("#profile-button-edit");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
export const profileEditForm = profileEditModal.querySelector("#modal-form-edit");
export const avatarEditForm = document.querySelector("#modal-form-avatar");
export const cardListEl = document.querySelector(".cards__list");
export const profileAddButton = document.querySelector("#profile-button-add");
export const profileAddModal = document.querySelector("#profile-add-modal");
export const cardAddForm = document.querySelector("#modal-form-add");
export const avatarEditButton = document.querySelector(".profile__image-edit");
export const profileAvatar = document.querySelector(".profile__image");
export const deleteModal = document.querySelector("#modal-delete");

export const config = {
    formSelector: "modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__form-input_type_error",
    errorClass: "modal__error_visible",
  };