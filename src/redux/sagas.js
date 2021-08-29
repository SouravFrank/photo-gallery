import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_IMAGES } from "./types";
import { getImagesSuccess, getImagesError } from "./actions";
import { url, getRecentData, getSearchData } from "../config";

function* fetchImages(action) {
  try {
    const searchText = action.payload?.searchText;
    const pageNo = action.payload?.pageNo;
    const searchParams = searchText
      ? {
          ...getSearchData,
          page: pageNo,
          tags: searchText,
          text: searchText,
        }
      : {
          ...getRecentData,
          page: pageNo,
        };

    const parameters = new URLSearchParams(searchParams);
    const imagedata = yield call(axios, {
      method: "get",
      url: url + parameters,
    });

    yield put(getImagesSuccess(imagedata));
  } catch (e) {
    yield put(getImagesError(e));
  }
}

function* mySaga() {
  yield takeLatest(GET_IMAGES, fetchImages);
}

export default mySaga;
