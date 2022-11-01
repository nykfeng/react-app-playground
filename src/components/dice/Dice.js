import "./Dice.css";

const Dice = (props) => {
  return (
    <i
      className={`die fa-solid fa-dice-${props.face} ${
        props.rolling ? "apply-animation" : ""
      }`}
    ></i>
  );
};

export default Dice;
