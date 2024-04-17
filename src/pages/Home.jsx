import React, { useEffect } from "react";
import { Title, CardGroup } from "./styles";
import CardView from "../components/CardView";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { getAllCloths } from "../redux/cloths/clothsAction";
import ErrorContent from "../components/ErrorContent";

const Home = () => {
  const dispatch = useDispatch();
  const { clothsData } = useSelector((state) => state.cloths);
  useEffect(() => {
    dispatch(getAllCloths());
  }, [dispatch]);

  const categoryInfo = [
    { type: "men", text: "Men's Clothing", theme: "#2BD9AF" },
    { type: "women", text: "Women's Clothing", theme: "#FF5E84" },
  ];

  return (
    <>
      <Title>Flash Sale</Title>
      <CardGroup>
        {clothsData?.length > 0 ? (
          clothsData
            ?.filter(
              (item) =>
                item.category === "women's clothing" ||
                item.category === "men's clothing"
            )
            ?.map((info) => <CardView data={info} key={info?.id} />)
        ) : (
          <ErrorContent />
        )}
      </CardGroup>
      <Title>Categories</Title>
      <CardGroup>
        {categoryInfo?.map((info, index) => (
          <Category info={info} key={index} />
        ))}
      </CardGroup>
    </>
  );
};

export default Home;
