import clothsType from "./clothsType";

const initialState = {
  clothsData: [],
  clothsError: "",
};

const ClothsReducer = (state = initialState, action) => {
  switch (action.type) {
    case clothsType.GET_ALL_CLOTHS_SUCCESS: {
      return {
        ...state,
        clothsData: action.payload,
      };
    }

    case clothsType.GET_ALL_CLOTHS_FAIL: {
      return {
        ...state,
        clothsData: [],
        clothsError: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export default ClothsReducer;
