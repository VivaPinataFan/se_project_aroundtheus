import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';
import {
  initialCards,
  profileTitle,
  profileSubtitle,
  profileEditButton,
  profileEditModal,
  profileTitleInput, 
  profileSubtitleInput,
  profileEditForm,
  cardListEl,
  profileAddButton,
  profileAddModal,
  cardAddForm,
  config,
} from "../utils/constants.js";


  
//profile variables
// 
// 


//edit modal variables
// 



//card variables
// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;
// const cardTitle = document.querySelector("#card-title");


//card modal variables


// const cardTitleInput = document.querySelector("#card-title-input");
// const cardUrlInput = document.querySelector("#card-image-input");

// const cardCloseButton = profileAddModal.querySelector(".modal__close");
// const cardSubmitButton = document.querySelector("#card-submit");

//image modal variables
// const imageModal = document.querySelector("#image-modal");




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
 

//Popup with image

function handlePreviewImage({ name, link }) {
  popupImage.open({ name, link });
}

//render card function
function renderCard(cardData) {
  const card = new Card (cardData, "#card-template", handlePreviewImage);
  return card.getView();
  // cardSection.addItem(card.getView());
  // const { name, link } = cardData
  // const card = new Card({ name, link }, "#card-template", handlePreviewImage);
  // return card.getView();
}



const popupImage = new PopupWithImage("#image-modal");
popupImage.setEventListeners();


//user info
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userJobSelector: profileSubtitle,
});


//handlers
 function handleEditProfileSubmit(inputValues) {
   userInfo.setUserInfo(inputValues);
   editPopup.close();
 }

function handleAddCardFormSubmit(inputValues) {
  const name = inputValues.title;
  const link = inputValues.url;
  const newCard = renderCard({ name, link });
  cardSection.addItem(newCard);
  newCardPopup.close();
}


 //Event handlers
 profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();

  profileTitleInput.value = userData.userName;
  profileSubtitleInput.value = userData.userJob;

  editPopup.open();
  editFormValidator.toggleButtonState();
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
    renderer: (data) => {
      const newCard = renderCard(data);
      cardSection.addItem(newCard);
    },
  },
  cardListEl
);

cardSection.renderItems();



