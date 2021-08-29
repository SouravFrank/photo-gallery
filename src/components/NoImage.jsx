import React from "react";
import { useSelector } from "react-redux";

function NoImage() {
  const error = useSelector((state) => state.error);

  return (
    <div style={{ paddingTop: 100, textAlign: "center" }}>
      {Boolean(error) ? (
        <h1>Something went wrong!</h1>
      ) : (
        <>
          <h1>Nothing to display</h1>
          <h3>Try to search something new...</h3>
        </>
      )}
    </div>
  );
}

export default NoImage;
