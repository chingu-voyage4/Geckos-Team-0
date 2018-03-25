import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.error}
        onRequestClose={props.handleClearErrors}
        contentLabel="Try a different value"
        ariaHideApp={false}
    >
        <h3>{props.error}</h3>
        <button onClick={props.handleClearErrors}>Close</button>
    </Modal>
);

export default OptionModal;
