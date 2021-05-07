import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
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
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    // React.Fragmentは書かなくてもよい
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
// 他のファイルでも利用したい場合、exportする
export default App;
