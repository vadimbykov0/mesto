export default class UserInfo {
    constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector)
    };

    setUserInfo({ username, description, avatar }) {
        this._profileName.textContent = username;
        this._profileDescription.textContent = description;
        this._profileAvatar.src = avatar
    };

    getUserInfo() {
        return {
            username: this._profileName.textContent,
            description: this._profileDescription.textContent,
        };
    };
};