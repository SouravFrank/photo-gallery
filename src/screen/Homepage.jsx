import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "../components/Image";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { getImages } from "../redux/actions";
import NoImage from "../components/NoImage";

function Homepage() {
  const [modalContent, setmodalContent] = useState("");
  const dispatch = useDispatch();
  const { loading, imageData } = useSelector((state) => state);

  const toggleModal = (uri) => setmodalContent((state) => (state ? "" : uri));

  useEffect(() => {
    dispatch(getImages({}));
  }, [dispatch]);

  useEffect(() => {
    console.log("Homepage");
  });

  return (
    <div style={{ width: "100%" }}>
      <Header />
      {imageData.length && <Image toggleModal={toggleModal} />}
      {loading && <Loader />}
      {imageData.length === 0 && !loading && <NoImage />}
      {modalContent && <Modal uri={modalContent} toggleModal={toggleModal} />}
    </div>
  );
}

export default memo(Homepage);
