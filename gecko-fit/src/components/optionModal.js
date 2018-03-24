import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={props.error} contentLabel="Try a different value">
        <h3>Try a Different Value</h3>
    </Modal>
);

export default OptionModal;
