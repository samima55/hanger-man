import style from "./HangmanDrawing.module.css";

function HangmanDrawing() {
  return (
    <div className={style.container}>
      <div className={style.hangerMouth} />
      <div className={style.hangerWood} />
      <div className={style.hanger} />
      <div className={style.bottomLine} />
    </div>
  );
}

export default HangmanDrawing;
