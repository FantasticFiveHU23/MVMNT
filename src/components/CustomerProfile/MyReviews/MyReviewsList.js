import React from "react";
import MyReviewsField from "./MyReviewsField";
import "../../../styles/CustomerProfilePage/MyReviews/MyReviewsList.css"

export function MyReviewsList({ businesses }) {
  return (
    <div className="my-reviews-business-list-container">
      <div className="my-reviews-list">
        {businesses &&
          businesses.map((business) => (
            <MyReviewsField
              key={business.username}
              businessName={business.name}
              businessId={business.username}
              category={business.category}
              rating={business.rating}
              distance={business.distance}
              bio={business.bio}
            />
          ))}
      </div>
    </div>
  );
}