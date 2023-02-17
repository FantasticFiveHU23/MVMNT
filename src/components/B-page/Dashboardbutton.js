import React from "react";
import "../../styles/Dashboardbutton.css"
const Dashboard = () => {

    return (

        
        <><div id="container">

            <a href='/Businessdashboard'>

            <button id="business">Business Dashboard</button>
            </a>

            <a href='/Businessprofile'>
            <button id="business"> View Your Business</button>
            </a>
      
     
    
            <a href='/Productview'>
                <button id="business">Product View</button>
            </a>
            <a href='/BusinessAnayltics'>
                <button id="business">Business Analytics</button>
            </a>


            </div>
            </>

    );
};
export default Dashboard;