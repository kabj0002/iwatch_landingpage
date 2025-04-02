"use client";
//Forsøg på at lave component... failed

const Dot = ({ chosenColor, setChosenColor }) => {
  const color = [navyWatch, mintWatch, oceanWatch];
  return (
    <div
      style={`backgroundColor: ${color}`}
      className={chosenColor === color ? "active" : ""}
      onClick={() => setChosenColor(color)}
    ></div>
  );
};
export default Dot;
