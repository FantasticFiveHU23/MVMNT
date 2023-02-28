import React from "react";
import "../../../styles/CustomerProfilePage/MyReviews/MyReviews.css";
import businesses from "./MyReviewsInfoEx";
import { MyReviewsList } from "./MyReviewsList";

export function MyReviews() {
    return (
      <div className="my-reviews-container">
        <div className="my-reviews-header">
          <h2 className="my-reviews-header-text">My Reviews</h2>
        </div>
        <MyReviewsList businesses={businesses} />
      </div>
    );
  }
