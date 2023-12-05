export default class UserInfo {
  constructor(userNameElement, userJobElement, avatarElement) {
    this._nameElement =  userNameElement;
    this._jobElement = userJobElement;
    this._avatarElement = avatarElement;
  }

  getUserInfo() {
    const profileObject = {};
    profileObject["userName"] = this._nameElement.textContent;
    profileObject["userJob"] = this._jobElement.textContent;
    return profileObject;
  }

  setUserInfo(title, subtitle) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = subtitle;
  }

  setUserAvatar(avatarElement) {
    this._avatarElement.src = avatarElement;
    this._avatarElement.alt = this._nameElement.textcontent
  }
}