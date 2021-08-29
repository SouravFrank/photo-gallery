export const yourApiKey = process.env.REACT_APP_API_KEY;
export const url = "https://api.flickr.com/services/rest/?";
export const image_per_page = 50;
export const image_size = "m";

export const getRecentData = {
  method: "flickr.photos.getRecent",
  api_key: yourApiKey,
  per_page: image_per_page,
  format: "json",
  nojsoncallback: 1,
  content_type: 1,
};

export const getSearchData = {
  method: "flickr.photos.search",
  api_key: yourApiKey,
  per_page: image_per_page,
  format: "json",
  nojsoncallback: 1,
  content_type: 1,
  media: "photos",
  safe_search: 2,
};
