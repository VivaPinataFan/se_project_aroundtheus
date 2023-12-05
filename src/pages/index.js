import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../pages/index.css";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import {
  profileTitle,
  profileSubtitle,
  profileEditButton,
  profileTitleInput,
  profileSubtitleInput,
  profileEditForm,
  cardListEl,
  profileAddButton,
  cardAddForm,
  config,
  avatarEditButton,
  profileAvatar,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "1ccf1ba4-0220-4b67-950b-c472a98644ae",
    "Content-Type": "application/json",
  },
});



const addFormValidator = new FormValidator(config, cardAddForm);
const editFormValidator = new FormValidator(config, profileEditForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//edit popup
const editPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileSubmit
);

editPopup.setEventListeners();

//avatar edit popup
const avatarEditPopup = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);

avatarEditPopup.setEventListeners();

//delete popup
const deletePopup = new PopupWithConfirm("#modal-delete");

deletePopup.setEventListeners();

//Popup with image
function handlePreviewImage({ name, link }) {
  popupImage.open({ name, link });
}

//render card function
function renderCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handlePreviewImage,
    function handleLike() {
      api
      .changeLikeStatus(cardData._id, cardElement.isLiked)
      .then((res) => {
        console.log(res);
        cardElement.updateLikes(res.isLiked);
      })
      .catch(console.error);
    },
    function handleDelete() {
      deletePopup.setSubmitAction(() => {
        deletePopup.setLoading(true);
        api
        .removeCard(cardData._id)
        .then((res) => {
          cardElement.removeCardElement(res._id);
          deletePopup.close();
        })
        .catch(console.error)
        .finally(() => {
          deletePopup.setLoading(false);
        });
      });
      deletePopup.open();
    },
  );
  return cardElement.getView();
}

let cardSection;
let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id;
    cardSection = new Section(
      {
        items: initialCards,
        renderer: (cardData) => {
          const cardElement = renderCard(cardData);
          cardSection.addItem(cardElement);
        },
      },
      cardListEl
    );
    cardSection.renderItems();
  })
  .catch(console.error);

const popupImage = new PopupWithImage("#image-modal");
popupImage.setEventListeners();

//user info
const userInfo = new UserInfo(
  profileTitle,
  profileSubtitle,
  profileAvatar
);

//handlers
function handleEditProfileSubmit({ name, description }) {
  editPopup.setLoading(true);
  api
    .updateUserInfo(name, description)
    .then(() => {
      userInfo.setUserInfo(name, description);
      editPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      editPopup.setLoading(false);
    });
}

function handleAddCardFormSubmit({ name, link }) {
  newCardPopup.setLoading(true);
  api
    .addCard({ name, link })
    .then((cardData) => {
      const cardElement = renderCard(cardData);
      cardSection.prependItem(cardElement);
      newCardPopup.close();
    })
    .catch(console.error)
    .finally(() => {
      newCardPopup.setLoading(false);
    });
}

function handleAvatarFormSubmit({ url }) {
  avatarEditPopup.setLoading(true);
  api
  .setUserAvatar(url)
  .then((userData) => {
    userInfo.setUserAvatar(userData.avatar);
    avatarEditPopup.close();
  })
  .catch(console.error)
  .finally(() => {
    avatarEditPopup.setLoading(false);
  });
}

//Event handlers
profileEditButton.addEventListener("click", () => {
  const { userName, userJob } = userInfo.getUserInfo();
  
  profileTitleInput.value = userName;
  profileSubtitleInput.value = userJob;

  editPopup.open();
  editFormValidator.toggleButtonState();
});

profileAddButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();
});

avatarEditButton.addEventListener("click", () => {
  avatarEditPopup.open();
});

//new Card Popup
const newCardPopup = new PopupWithForm(
  "#profile-add-modal",
  handleAddCardFormSubmit
);

newCardPopup.setEventListeners();

//card section

// cardSection.renderItems();
