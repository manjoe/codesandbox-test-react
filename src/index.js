import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // return文の中ではタグ一つにする必要がある
    <React.Fragment>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </React.Fragment>
  );
};

// 1個目：アプリ、2個目：挿入する場所
ReactDom.render(<App />, document.getElementById("root"));
