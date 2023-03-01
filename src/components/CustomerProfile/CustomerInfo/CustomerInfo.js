import React from "react";
import '../../../styles/CustomerProfilePage/CustomerInfo.css';

export function CustomerInfo(){

    return(
        <div className="customer-info-container">
            <p className="username">Username</p>
            <p className="user-id">@userID</p>
            {/* <p className="location">Location</p> */}
        </div>
    )
};