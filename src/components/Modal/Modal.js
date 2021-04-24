import PropTypes from "prop-types";
import { BsX } from "react-icons/bs";

import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <BsX className="cross-btn" size={24} role="button" />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
