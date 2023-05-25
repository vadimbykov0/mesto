export default class UserInfo {
    constructor({ profileNameSelector, profileDescriptionSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
    };

    setUserInfo(userData) {
        this._profileName.textContent = userData.username;
        this._profileDescription.textContent = userData.description;
    };

    getUserInfo() {
        return {
            username: this._profileName.textContent,
            description: this._profileDescription.textContent,
        };
    };
};