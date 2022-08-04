import React, { useState } from "react";
import styled from "styled-components";
import Square from "../components/Square";
type Player = "X" | "O" | "BOTH" | null;

type Props = {};

const calculateWinner = (squares: Player[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = (props: Props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);
  const handleClickSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const handleOnClickReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  return (
    <div>
      <p>Hey {currentPlayer}, it&apos;s your turn</p>

      <StyledGrid>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                key={i}
                winner={winner}
                onClick={() => handleClickSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </StyledGrid>

      <ButtonReset onClick={handleOnClickReset}>Reset</ButtonReset>
    </div>
  );
};

export default Board;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 12px;
`;

const ButtonReset = styled.button`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: aqua;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
`;
