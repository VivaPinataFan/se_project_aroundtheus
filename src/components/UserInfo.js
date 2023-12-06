export default class UserInfo {
  constructor(userNameElement, userJobElement, avatarElement) {
    this._nameElement =  userNameElement;
    this._jobElement = userJobElement;
    this._avatarElement = avatarElement;
  }

  getUserInfo() {
    const profileObject = {};
    profileObject["name"] = this._nameElement.textContent;
    profileObject["description"] = this._jobElement.textContent;
    console.log(profileObject);
    return profileObject;
  }

  setUserInfo(name, description) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = description;
  }

  setUserAvatar(avatarElement) {
    this._avatarElement.src = avatarElement;
    this._avatarElement.alt = this._nameElement.textcontent
  }
}