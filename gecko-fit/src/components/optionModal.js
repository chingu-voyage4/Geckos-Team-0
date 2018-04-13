import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.error}
        onRequestClose={props.handleClearErrors}
        contentLabel="Try a different value"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">{props.error}</h3>
        <button className="modal__button" onClick={props.handleClearErrors}>
            Close
        </button>
    </Modal>
);

export default OptionModal;
