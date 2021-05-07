import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
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
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  console.log(`レンダリング${num} ${faceShowFlag}`);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // 初回レンダリングのみ通したい場合
  useEffect(() => {
    console.log("useEffect");
  }, []);
  // numの更新時に通したい場合
  // eslintで警告がでる
  //   useEffect内で利用される変数は、第２引数で取得されるべきでは？というエラーだが、今回は、不要な警告なので警告を出さないようにする
  useEffect(() => {
    console.log(`useEffect ${num}`);
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    // React.Fragmentは書かなくてもよい
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};
// 他のファイルでも利用したい場合、exportする
export default App;
