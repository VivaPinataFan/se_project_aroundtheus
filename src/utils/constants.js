export const initialCards = [
    {
      name: "Bryce Canyon",
      link: "https://images.unsplash.com/photo-1681056943589-4db67093fd6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1533&q=80",
    },
    {
      name: "Big Sur",
      link: "https://images.unsplash.com/photo-1655827718480-53efd76571f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Emerald Bay State Park",
      link: "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Yellowstone National Park",
      link: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Mount Rainier",
      link: "https://images.unsplash.com/photo-1595259734744-a1d3d69d61f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Antelope Canyon",
      link: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileEditButton = document.querySelector("#profile-button-edit");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
export const profileEditForm = profileEditModal.querySelector("#modal-form-edit");
export const cardListEl = document.querySelector(".cards__list");
export const profileAddButton = document.querySelector("#profile-button-add");
export const profileAddModal = document.querySelector("#profile-add-modal");
export const cardAddForm = document.querySelector("#modal-form-add");

export const config = {
    formSelector: "modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__form-input_type_error",
    errorClass: "modal__error_visible",
  };