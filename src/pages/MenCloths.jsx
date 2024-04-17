import React, { useEffect } from "react";
import { CardGroup, Title } from "./styles";
import CardView from "../components/CardView";
import { useDispatch, useSelector } from "react-redux";
import { getAllCloths } from "../redux/cloths/clothsAction";
import ErrorContent from "../components/ErrorContent";

const MenCloths = () => {
  const dispatch = useDispatch();
  const { clothsData } = useSelector((state) => state.cloths);
  useEffect(() => {
    dispatch(getAllCloths());
  }, [dispatch]);

  return (
    <>
      <Title>Men's Clothing</Title>
      <CardGroup>
        {clothsData?.length > 0 ? (
          clothsData
            ?.filter((item) => item.category === "men's clothing")
            ?.map((info, index) => <CardView data={info} key={index} />)
        ) : (
          <ErrorContent />
        )}
      </CardGroup>
    </>
  );
};

export default MenCloths;
