import { GET_IMAGES, GET_IMGAES_SUCCESS, GET_IMAGES_FAILED } from "./types";

export const getImages = (data) => {
  return {
    type: GET_IMAGES,
    payload: data,
  };
};

export const getImagesSuccess = (data) => {
  return {
    type: GET_IMGAES_SUCCESS,
    payload: data,
  };
};

export const getImagesError = (data) => {
  return {
    type: GET_IMAGES_FAILED,
    payload: data,
  };
};
