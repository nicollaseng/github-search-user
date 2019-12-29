import React, { useEffect } from "react";

const Test = (name = "Nicollas", ...props) => {
  useEffect(() => {
    console.log("hey i'm mounted");
  }, []);
  return <div>{name}</div>;
};

export default Test;
