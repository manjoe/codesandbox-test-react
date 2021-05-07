import React from "react";

/**
 * # コンポーネントの命名規則
 * パスカルケースで命名する
 * * 必ず先頭を大文字にする
 * * アンダースコアは利用しない
 * ## 正しい例
 *   * App
 *   * SomeComponent
 * ##エラーの例
 *   * app
 *   * someComponent
 * ## 非推奨
 *   * Some_component
 */
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    // React.Fragmentは書かなくてもよい
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
// 他のファイルでも利用したい場合、exportする
export default App;
