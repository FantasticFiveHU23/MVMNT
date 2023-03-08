import React, {useState} from "react";
import '../../../styles/CustomerProfilePage/EditButton.css';
import '../../../styles/CustomerProfilePage/EditWindow/EditPopUp.css';
import { EditPopUp } from "../EditWindow/EditPopUp";

export function EditButton(props) {
  const [showModal, setShowModal] = useState(false);
  // const [username, setUsername] = useState(props.username);
  // const [userID, setUserID] = useState(props.userID);
  // const [profilePicture, setProfilePicture] = useState(props.profilePicture);

  function toggleModal(){
    setShowModal(!showModal);
  }

  

  const EditModal = () => {
    return (
      <div className="edit-modal">
        <span className="close-button" onClick={toggleModal}>
          &times;
        </span>
        <EditPopUp/>
      </div>
    );
  }

  return (
    <React.Fragment>
      <button className="edit-button" onClick={toggleModal}>
        Edit Profile
      </button>
      {showModal? <EditModal/> : null}
    </React.Fragment>
)
  
};