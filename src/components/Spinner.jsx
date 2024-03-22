import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "red",
};

const Spinner = (loading) => {
  let [color, setColor] = useState("#ffffff");
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner