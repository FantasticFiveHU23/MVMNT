import React from 'react';
import { CategoryButtons } from './CategoryButtons';
import "../../styles/CategoriesPage/CategoriesContainer.css";
import foodImage from "../../images/CategoryImages/Food.png";
import fashionImage from "../../images/CategoryImages/Fashion.png";
import artImage from "../../images/CategoryImages/Art.png";
import wellnessImage from "../../images/CategoryImages/Wellness.png";
import hairImage from "../../images/CategoryImages/Hair.png";
import homeLivingImage from "../../images/CategoryImages/HomeLiving.png";
import techImage from "../../images/CategoryImages/Tech.png";
import entertianmentImage from "../../images/CategoryImages/Entertainment.png";

export const CategoriesContainer = () => {
  return (
    <div className="categories-container">
      <CategoryButtons image={foodImage} text="Food"/>
      <CategoryButtons image={fashionImage} text="Fashion"/>
      <CategoryButtons image={artImage} text="Art"/>
      <CategoryButtons image={wellnessImage} text="Wellness"/>
      <CategoryButtons image={hairImage} text="Hair"/>
      <CategoryButtons image={homeLivingImage} text="Home/Living"/>
      <CategoryButtons image={techImage} text="Tech"/>
      <CategoryButtons image={entertianmentImage} text="Entertainment"/>
    </div>
  );
};
