import clothsType from "./clothsType";
import { clothsUrl } from "./clothsUrl";
import clothsService from "./clothsService";

export function resetClothsError() {
  return (dispatch) =>
    dispatch({
      type: clothsType.GET_ALL_CLOTHS_FAIL,
      error: "",
    });
}

export function getAllCloths() {
  resetClothsError();
  return (dispatch) =>
    clothsService
      .allClothsService(clothsUrl.allCloths)
      .then((data) => {
        const newDataList = dispatch({
          type: clothsType.GET_ALL_CLOTHS_SUCCESS,
          payload: data,
        });
        return newDataList;
      })
      .catch((error) => {
        if (error) {
          return dispatch({
            type: clothsType.GET_ALL_CLOTHS_FAIL,
            error: error.response?.data?.message,
          });
        }
      });
}
