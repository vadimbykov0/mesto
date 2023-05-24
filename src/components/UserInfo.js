export default class UserInfo {
    constructor({ profileNameSelector, profileDescriptionSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
    };

    setUserInfo(elementUser) {
        this._profileName.textContent = elementUser.username;
        this._profileDescription.textContent = elementUser.description;
    };

    getUserInfo() {
        return {
            username: this._profileName.textContent,
            description: this._profileDescription.textContent,
        };
    };
};