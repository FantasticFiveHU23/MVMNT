import React from "react";
import { ProfilePicture } from "../ProfilePicture";
import '../../styles/ProfilePicture.css'
import '../../styles/CustomerProfilePage/ProfileInfo.css';

export function ProfileInfo(){

    return(
        <div className="profile-info-container">
            <ProfilePicture />
        </div>
    )
};