import React, {useState}from "react";
import '../../../styles/CustomerProfilePage/EditWindow/EditPopUp.css';

export function EditPopUp(props) {
  const [username, setUsername] = useState(props.username);
  const [userID, setUserID] = useState(props.userID);
  const [profilePicture, setProfilePicture] = useState(props.profilePicture);


  return (
    <div className="edit-popup-container">
      <form >
        <label className="">
          {/* <ProfilePicture /> */}
          <input type="file" onChange={(event) => setProfilePicture(event.target.value)} />
        </label>  
        
        <div className="user-info">
          <div>
            <label className="edit-username">Username:</label>
            <input className="edit-username-input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />            
          </div>
          <div>
            <label className="edit-userid">UserID:</label>
            <input className="edit-userid-input" type="text" value={userID} onChange={(event) => setUserID(event.target.value)} />
          </div>
        </div>      
        <button className="save-changes" type="submit">Save Changes</button>
      </form>
    </div>
  );
}
