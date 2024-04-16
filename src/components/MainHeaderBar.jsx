import React from "react";
import {
  HeaderBarContent,
  HeaderBarText,
  HeaderBarTextSpan,
} from "../pages/styles";
import { useNavigate } from "react-router";

const MainHeaderBar = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderBarContent>
        <HeaderBarText>
          <HeaderBarTextSpan onClick={handleOnclick}>
            Modern Walk
          </HeaderBarTextSpan>
        </HeaderBarText>
      </HeaderBarContent>
    </>
  );
};

export default MainHeaderBar;
