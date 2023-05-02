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
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardTitle = document.querySelector("#card-title");

//card modal variables
const profileAddButton = document.querySelector("#profile-button-add");
const profileAddModal = document.querySelector("#profile-add-modal");
const cardTitleInput = document.querySelector("#card-title-input");
const cardUrlInput = document.querySelector("#card-image-input");
const cardAddForm = document.querySelector("#modal-form-add");
const cardCloseButton = profileAddModal.querySelector(".modal__close");

//image modal variables
const imageModal = document.querySelector("#image-modal");
const modalImage = document.querySelector(".modal__image");
const modalImageCaption = document.querySelector(".modal__image-caption");
const modalImageClose = imageModal.querySelector(".modal__close");

//close function
function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

//open function
function openPopup(popup) {
  popup.classList.add('modal_opened')
}

//render card function
function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

//card rendering
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__button-like");
  const deleteButton = cardElement.querySelector(".card__button-delete");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button-like_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openPopup(imageModal);
    modalImage.src = cardImageEl.src;
    modalImage.alt = cardImageEl.alt;
    modalImageCaption.textContent = cardTitleEl.textContent;
  });

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

// Event handlers
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(profileAddModal);
  e.target.reset();
}

// event listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  openPopup(profileEditModal);
});

editCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleAddCardFormSubmit);

profileAddButton.addEventListener("click", () => {
  openPopup(profileAddModal);
});

cardCloseButton.addEventListener("click", () => {
  closePopup(profileAddModal);
});

modalImageClose.addEventListener("click", () => {
  closePopup(imageModal);
});

//card for each loop
initialCards.forEach(renderCard);
