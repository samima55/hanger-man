import style from "./HangmanDrawing.module.css";

const HEAD =(
  <div className={style.head}>

  </div>
)

const BODY =(
  <div className={style.body}>

  </div>
)
function HangmanDrawing() {
  return (
    <div className={style.container}>
      {HEAD}
      {BODY}
      <div className={style.hangerMouth} />
      <div className={style.hangerWood} />
      <div className={style.hanger} />
      <div className={style.bottomLine} />
    </div>
  );
}

export default HangmanDrawing;
