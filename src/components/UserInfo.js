export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._nameElement = userNameSelector;
    this._jobElement = userJobSelector;
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userJob: this._jobElement.textContent
    };
  }

  setUserInfo({ title, subtitle }) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = subtitle;
  }
}