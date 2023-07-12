export default class UserInfo {
  constructor({ userNameElement, userJobElement }) {
    this._nameElement =  userNameElement;
    this._jobElement = userJobElement;
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