export default class UserInfo {
    constructor({ userNameSelector, jobSelector }) {
        this._nameElement = document.querySelector(userNameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            userName: this._nameElement.textContent,
            userJob: this._jobElement.textContent
        };
    }

    setUserInfo({ userName, job }) {
        this._nameElement.textContent = userName;
        this._jobElement.textContent = job;
    }
}