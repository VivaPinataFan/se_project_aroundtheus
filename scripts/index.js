const initialCards = [
  { 
    name: "Yosemite Valley", 
    link: "../images/yosemite.jpg" 
  },
  { 
    name: "Lake Louise", 
    link: "../images/lake-louise.jpg" 
  },
  { 
    name: "Bald Mountains", 
    link: "../images/bald-mountains.jpg" 
  },
  { 
    name: "Latemar", 
    link: "../images/latemar.jpg" 
  },
  { 
    name: "Vanoise National Park", 
    link: "../images/vanoise.jpg" 
  },
  { 
    name: "Lago di Braies", 
    link: "../images/lago.jpg", 
  }
];

// Elements

const profileEditButton = document.querySelector('#profile-button-edit');
const profileEditModal = document.querySelector('#profile-edit-modal');
const modalCloseButton = document.querySelector('#modal-close-button');

profileEditButton.addEventListener('click', () => {
  profileEditModal.classList.add('modal__opened');
});

modalCloseButton.addEventListener('click', () => {
  profileEditModal.classList.remove('modal__opened');
})