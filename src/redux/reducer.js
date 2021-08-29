import { GET_IMAGES, GET_IMGAES_SUCCESS, GET_IMAGES_FAILED } from "./types";
import { getFlickrImageURL } from "../util";

const INITIAL_STATE = {
  searchText: "",
  imageData: [],
  currentPage: 0,
  hasMore: false,
  loading: false,
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGES:
      const searchText = action.payload.searchText;

      return {
        searchText: searchText || "",
        imageData: state.searchText !== searchText ? [] : state.imageData,
        loading: true,
      };
    case GET_IMGAES_SUCCESS:
      const { page, pages, photo, total } = action.payload.data.photos;
      const urls =
        photo && photo.length
          ? photo.map((photo) => {
              return getFlickrImageURL(photo);
            })
          : [];
      return {
        ...state,
        imageData: [...state.imageData, ...urls],
        loading: false,
        hasMore: page < pages,
        currentPage: page,
        totalImages: total,
        error: "",
      };
    case GET_IMAGES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
