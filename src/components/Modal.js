import React from "react";
import "./Modal.css";
import {FaTimes} from "react-icons/fa"

function Modal({item}) {
    const { user, urls, key } = item;

  return (
    <div className="modal-container">
      <div className="close-btn"><FaTimes /></div>
      <div className="modal">
        <img src={urls.small} alt="" />
        <div className="details">
        <h3>{user.name}</h3>
        <p>{user.location}</p>

        </div>
      </div>
    </div>
  );
}

export default Modal;
