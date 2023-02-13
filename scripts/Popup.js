export default class Popup {
    constructor(popupSelector) {      
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
;    };

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener ('keydown', this._handleEscClose);
    };

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener ('keydown', this._handleEscClose);
    };

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    setEventListeners(){
        this._popupElement.addEventListener('mousedown', e => {
            const isOverlay = e.target.classList.contains('popup');
            const isCloseBtn = e.target.classList.contains('popup__close');
            if (isOverlay || isCloseBtn) {
                this.close();
            }
        })
    }
}
