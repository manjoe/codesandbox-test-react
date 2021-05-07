import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    // color: color,
    // property名と変数名が同じ場合、省略できる
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
