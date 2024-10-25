import React from "react";
import Modal from "react-modal";
import "./navigationModal.css"; // Ensure this is correctly linked

const NavigationModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen} // Use the isOpen prop to control modal visibility
      onRequestClose={onRequestClose} // Close the modal
      className="NavigationModal__overall-div" // Apply CSS classes
    >
      <div className="c-container">
        <p onClick={onRequestClose}>Back</p>
      </div>
      <ul className="montserrat-bold hide-small-width">
        <li>
          <p>the team</p>
        </li>
        <li>
          <p>schedule</p>
        </li>
        <li>
          <p>contact</p>
        </li>
        <li>
          <p className="flags">
            <a className="greek-flag" href="https://www.example.com">
              <span className="fi fi-gr"> </span>
            </a>
            <div className="divider" />
            <a className="uk-flag">
              <span className="fi fi-gb"></span>
            </a>
          </p>
        </li>
      </ul>
    </Modal>
  );
};

export default NavigationModal;
