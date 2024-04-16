import React from "react";
import {
  CardAmount,
  CardContentWrapper,
  CardDescription,
  CardImage,
  CardPara,
  CardTitle,
} from "./styles";

const CardView = ({ data }) => {
  const { category, image, price, description } = data;
  return (
    <>
      <CardContentWrapper>
        <CardTitle>{category}</CardTitle>
        <CardImage src={image} alt="..." />
        <CardDescription
          style={{
            backgroundColor:
              category === "women's clothing" ? "#FF5E84" : "#2BD9AF",
          }}
        >
          <CardAmount>Rs {price}</CardAmount>
          <CardPara>{description}</CardPara>
        </CardDescription>
      </CardContentWrapper>
    </>
  );
};

export default CardView;
