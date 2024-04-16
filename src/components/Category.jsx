import React from "react";
import { CardCategory, CardCategoryText } from "./styles";
import { useNavigate } from "react-router";

const Category = ({ info }) => {
  const navigate = useNavigate();
  const { type, text, theme } = info;

  const handleClick = (type) => {
    navigate(type === "men" ? "/mens-clothing" : "/womens-clothing");
  };

  return (
    <>
      <CardCategory
        style={{ backgroundColor: theme }}
        onClick={() => handleClick(type)}
      >
        <CardCategoryText>{text}</CardCategoryText>
      </CardCategory>
    </>
  );
};

export default Category;
