import React from "react";
import "../../../styles/CustomerProfilePage/MyReviews/MyReviews.css";
import MyReviewsField from "./MyReviewsField";
import businesses from "./MyReviewsInfoEx";

export function MyReviews({ businesses }) {
  return (
    <div className="my-reviews-container">
        <MyReviewsField/>
      {/* <div className="my-reviews-list">
        {businesses &&
          businesses.map((business) => (
            <MyReviewsField
              key={business.businessId}
              businessName={business.businessName}
              businessId={business.businessId}
              category={business.category}
              rating={business.rating}
              distance={business.distance}
              bio={business.bio}
            />
          ))}
      </div> */}
    </div>
  );
}
