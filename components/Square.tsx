import React from "react";
import styled from "styled-components";

const StyledSquare = styled.button((props: any) => ({
    background: props && props?.background === "X" ? "rgb(87, 218, 21)" : "crimson" ,
    width: '100px',
    height: '100px',
    fontSize: "5rem",
    color: "#e8e5e5",
    border: "solid 1px crimson",
    borderRadius: "10px"
}));


type Player = "X" | "O" | null;

interface Props {
  value: Player;
  winner: Player;
  onClick: VoidFunction;
}

function Square({ value, onClick, winner }: Props) {
  if (!value) {
    return <StyledSquare onClick={onClick} disabled={Boolean(winner)} />;
  }
//   className={`square square_${value.toLocaleLowerCase()}`}
  return (
    <StyledSquare background={value} disabled>
      {value}
    </StyledSquare>
  );
}

export default Square;
