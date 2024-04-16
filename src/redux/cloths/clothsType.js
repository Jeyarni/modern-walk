import { async, createTypes } from "redux-action-creator";

const ClothsType = createTypes([...async("GET_ALL_CLOTHS")]);

export default ClothsType;
