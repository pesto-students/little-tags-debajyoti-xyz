import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

import "./LoginSignUpModal.scss"

const LoginSignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="login-signup-container">
        <div className="action-area">

        </div>
        <div className="illustration">
            
        </div>
      </div>
    </Modal>
  );
};

LoginSignUpModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LoginSignUpModal;
