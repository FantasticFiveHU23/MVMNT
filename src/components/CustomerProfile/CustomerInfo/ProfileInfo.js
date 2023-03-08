import React, {useState} from "react";
import { ProfilePicture } from "../../ProfilePicture";
import { CustomerInfo } from "./CustomerInfo";
import '../../../styles/ProfilePicture.css'
import '../../../styles/CustomerProfilePage/ProfileInfo.css';
import { EditButton } from "../CustomerInfo/EditButton";

export function ProfileInfo(){
    const [profilePicture, setProfilePicture] = useState(
        require("../../../images/pfpPlaceholder.png")
      );

    function updateProfilePicture(newProfilePicture) {
    setProfilePicture(newProfilePicture);
    }
      
    return(
        <div className="profile-info-container">
            <ProfilePicture className="profile-page-pfp" src={profilePicture} />
            <CustomerInfo/>
            <EditButton updateProfilePicture={updateProfilePicture} />
        </div>
    )
};