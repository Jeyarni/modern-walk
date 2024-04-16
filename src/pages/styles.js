import styled from "styled-components";

const HeaderBarContent = styled.div`
  text-align: center;
  border-bottom: 4px solid #d9d9d9;
`;

const HeaderBarText = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #0e0e0e;
`;

const HeaderBarTextSpan = styled.span`
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  margin: 2rem;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #0e0e0e;
  text-align: left;
  line-height: 77.34px;
  margin-left: 10px;
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export {
  HeaderBarContent,
  HeaderBarText,
  Title,
  ContentWrapper,
  CardGroup,
  HeaderBarTextSpan,
};
