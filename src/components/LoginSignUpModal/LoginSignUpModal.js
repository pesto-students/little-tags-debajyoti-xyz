import React from "react";
import PropTypes from "prop-types";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import "./LoginSignUpModal.scss"

const LoginSignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="login-signup-container">
        <div className="action-area">
            <h3 className="slogan">
                Please login to continue shopping
            </h3>
            <Button variant="outline" size="lg" icon={FaFacebookF}>
                Continue with Facebook
            </Button>
            <Button variant="outline" size="lg" icon={FaGoogle}>
                Continue with Google
            </Button>
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
