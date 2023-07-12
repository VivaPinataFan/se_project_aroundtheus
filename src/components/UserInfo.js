export default class UserInfo {
  constructor({ name, job }) {
    this._nameElement = name;
    this._jobElement = job;
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