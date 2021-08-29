import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@material-ui/core/Card";
import Loader from "./Loader";
import { getImages } from "../redux/actions";
import { useStyles } from "../styles/styles";

const ImageBlock = ({ toggleModal, url }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.Image_card}
      variant="outlined"
      onClick={() => toggleModal(url)}
    >
      <img src={url} alt={url} />
    </Card>
  );
};

const ImageContainer = ({ toggleModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { imageData, hasMore, currentPage, searchText } = useSelector(
    (state) => state
  );

  const fetchMoreData = () => {
    dispatch(getImages({ searchText: searchText, pageNo: currentPage + 1 }));
  };

  return (
    <div>
      <InfiniteScroll
        className={classes.Image_container}
        dataLength={imageData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {imageData.map((url) => (
          <ImageBlock key={url} toggleModal={toggleModal} url={url} />
        ))}
      </InfiniteScroll>
      )
    </div>
  );
};

export default memo(ImageContainer);
