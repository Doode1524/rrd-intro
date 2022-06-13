import React from "react";
import { useLocation } from "react-router-dom";

const Test1 = () => {

  const location = useLocation();
  console.log(location);
  
  return <div>Test1</div>;
};

export default Test1;
