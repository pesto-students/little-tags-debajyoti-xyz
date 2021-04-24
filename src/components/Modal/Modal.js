import PropTypes from "prop-types";
import { BsX } from "react-icons/bs";

import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleKeyPress = (evt) => {
    console.log(evt)
  }

  const trapClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className="modal-wrapper" onClick={onClose} onKeyPress={handleKeyPress}>
      <div className="modal" onClick={trapClick}>
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
