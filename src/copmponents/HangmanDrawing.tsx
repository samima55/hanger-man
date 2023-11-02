import style from "./HangmanDrawing.module.css";

const HEAD = <div className={style.head}></div>;
const BODY = <div className={style.body}></div>;
const RIGHT_ARM = <div className={style.rightArm}></div>;
const LEFT_ARM = <div className={style.leftArm}></div>;
const RIGHT_LEG = <div className={style.rightLeg}></div>;
const LEFT_LEG = <div className={style.leftLeg}></div>;
function HangmanDrawing() {
  return (
    <div className={style.container}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className={style.hangerMouth} />
      <div className={style.hangerWood} />
      <div className={style.hanger} />
      <div className={style.bottomLine} />
    </div>
  );
}

export default HangmanDrawing;
