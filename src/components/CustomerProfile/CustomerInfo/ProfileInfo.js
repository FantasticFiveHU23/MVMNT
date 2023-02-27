import React from "react";
import { ProfilePicture } from "../../ProfilePicture";
import { CustomerInfo } from "./CustomerInfo";
import '../../../styles/ProfilePicture.css'
import '../../../styles/CustomerProfilePage/ProfileInfo.css';
import { EditButton } from "../CustomerInfo/EditButton";

export function ProfileInfo(){

    return(
        <div className="profile-info-container">
            <ProfilePicture className="profile-page-pfp"/>
            <CustomerInfo/>
            <EditButton/>
        </div>
    )
};