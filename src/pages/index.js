import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
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

  
//profile variables
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector("#profile-button-edit");

//edit modal variables
const profileEditModal = document.querySelector("#profile-edit-modal");
const editCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileEditForm = profileEditModal.querySelector("#modal-form-edit");

//card variables
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitle = document.querySelector("#card-title");
const cardListEl = document.querySelector(".cards__list");

//card modal variables
const profileAddButton = document.querySelector("#profile-button-add");
const profileAddModal = document.querySelector("#profile-add-modal");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-image-input");
const cardAddForm = document.querySelector("#modal-form-add");
const cardCloseButton = profileAddModal.querySelector(".modal__close");
const cardSubmitButton = document.querySelector("#card-submit");

//image modal variables
const imageModal = document.querySelector("#image-modal");
const modalImage = document.querySelector(".modal__image");
const modalImageCaption = document.querySelector(".modal__image-caption");
const modalImageClose = imageModal.querySelector(".modal__close");

// clickOutPopup(profileEditModal);

// clickOutPopup(profileAddModal);

// clickOutPopup(imageModal);

//validation
const config = {
  formSelector: "modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

const addFormValidator = new FormValidator(config, cardAddForm);
const editFormValidator = new FormValidator(config, profileEditForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//edit popup
const editPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileSubmit
);

editPopup.setEventListeners()
 

//card rendering
// initialCards.forEach((cardData) => renderCard(cardData));

//Popup with image

function handlePreviewImage({ name, link }) {
  popupImage.open({ name, link });
}

//render card function
function renderCard(cardData) {
  const card = new Card (cardData, "#card-template", handlePreviewImage);
  cardSection.addItem(card.getView());
  // const { name, link } = cardData
  // const card = new Card({ name, link }, "#card-template", handlePreviewImage);
  // return card.getView();
}



const popupImage = new PopupWithImage("#image-modal");


//user info
const userInfo = new UserInfo({
  nameSelector: profileTitle,
  jobSelector: profileSubtitle,
});


//handlers
function handleEditProfileSubmit(inputValues) {
  const { title, job } = inputValues;
  userInfo.setUserInfo({ title, job });
  editPopup.close();
}

function handleAddCardFormSubmit(inputValues) {
  const { name, link } = inputValues;
  renderCard({ name, link });
  newCardPopup.close();
}


 //Event handlers
 profileEditButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  profileTitleInput.value = name;
  profileSubtitleInput.value = job;
  editFormValidator.toggleButtonState();
  editPopup.open();
 });

profileAddButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();

});

//new Card Popup
const newCardPopup = new PopupWithForm('#profile-add-modal',
handleAddCardFormSubmit);

newCardPopup.setEventListeners();

//card section
const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardListEl
);

cardSection.renderItems();



