import styled from "styled-components";

const CardContentWrapper = styled.div`
  margin: 1rem;
  background-color: #ffffff;
  width: 220px;
  height: 333px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-weight: 700;
`;

const CardTitle = styled.div`
  font-weight: 700;
  margin-top: 1rem;
  font-size: 18px;
  text-transform: capitalize;
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 0.5rem 0 1rem;
`;

const CardDescription = styled.div`
  width: 220px;
  height: 150px;
  text-wrap: wrap;
  border-radius: 8px;
  font-weight: 400;
  font-size: 13px;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const CardPara = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardAmount = styled.div`
  color: #0e42fd;
  font-weight: 700;
  font-size: 20px;
`;

const CardCategory = styled.div`
  border-radius: 8px;
  margin: 1rem;
  text-align: center;
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const CardCategoryText = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 50px;
`;

export {
  CardContentWrapper,
  CardTitle,
  CardImage,
  CardDescription,
  CardPara,
  CardAmount,
  CardCategory,
  CardCategoryText,
};
