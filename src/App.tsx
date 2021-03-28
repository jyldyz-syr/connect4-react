import React, { useEffect, useState } from "react";
import styled from "styled-components";

const initialState: Array<Array<string>> = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

const App = () => {
  const [columns, setColumns] = useState<Array<Array<string>>>(
    JSON.parse(JSON.stringify(initialState))
  );

  const [players, setPlayers] = useState<{ [key: string]: string | null }>({
    P1: "Player 1",
    P2: "Player 2",
  });

  const [currentPlayer, setCurrentPlayer] = useState<string>("P1");
  const [winner, setWinner] = useState<null | string>(null);

  const getPlayersNames = () => {
    let P1: string | null;
    let P2: string | null;

    P1 = window.prompt(`Enter your name`);
    P2 = window.prompt(`Enter your name`);

    if (
      P1 === P2 ||
      (P1 != null && P1.length === 0) ||
      (P2 != null && P2.length === 0) ||
      (P1 && P1.trim().length === 0) ||
      (P2 && P2.trim().length === 0)
    ) {
      alert("Error: give different names to players");

      getPlayersNames();
    }

    return {
      P1,
      P2,
    };
  };

  useEffect(() => {
    const { P1, P2 } = getPlayersNames();

    setPlayers({ P1, P2 });
  }, []);

  const clickHandler = (columnId: number, fieldId: number) => {
    let newArr = columns;

    if (newArr[columnId][fieldId] !== "") return;
    newArr[columnId][fieldId] = currentPlayer;

    setColumns(newArr);

    if (currentPlayer === "P1") {
      setCurrentPlayer("P2");
    } else {
      setCurrentPlayer("P1");
    }
    checkWinner();
  };

  const checkWinner = () => {
    let p1Column: number = 0;
    let p2Column: number = 0;
    let p1Row: number = 0;
    let p2Row: number = 0;
    let p1Diagonal: number = 0;
    let p2Diagonal: number = 0;
    let p1BackDiagonal: number = 0;
    let p2BackDiagonal: number = 0;
    let columnsLength: number = columns.length - 1;
    let rowLength: number = 5;

    for (let c = 0; c < columnsLength; c++) {
      for (let i = 0; i < rowLength; i++) {
        if (
          columns[c][i] &&
          columns[c][i + 1] &&
          columns[c][i + 2] &&
          columns[c][i + 3]
        ) {
          if (
            columns[c][i] === columns[c][i + 1] &&
            columns[c][i + 1] === columns[c][i + 2] &&
            columns[c][i + 2] === columns[c][i + 3]
          ) {
            if (columns[c][i] === "P1") {
              p1Column = 1;
            } else {
              p2Column = 1;
            }
          }
        }
      }
    }

    for (let c = 0; c < columnsLength; c++) {
      for (let i = 0; i < rowLength; i++) {
        if (
          columns[c][i] &&
          columns[c + 1] &&
          columns[c + 1][i] &&
          columns[c + 2] &&
          columns[c + 3]
        ) {
          if (
            columns[c][i] === columns[c + 1][i] &&
            columns[c + 1][i] === columns[c + 2][i] &&
            columns[c + 2][i] === columns[c + 3][i]
          ) {
            if (columns[c][i] === "P1") {
              p1Row = 1;
            } else {
              p2Row = 1;
            }
          }
        }
      }
    }

    for (let c = 0; c < columnsLength; c++) {
      for (let i = 0; i < rowLength; i++) {
        if (
          columns[c][i] &&
          columns[c + 1] &&
          columns[c + 2] &&
          columns[c + 3] &&
          columns[c + 1][i + 1] &&
          columns[c + 2][i + 2] &&
          columns[c + 3][i + 3]
        ) {
          if (
            columns[c][i] === columns[c + 1][i + 1] &&
            columns[c + 1][i + 1] === columns[c + 2][i + 2] &&
            columns[c + 2][i + 2] === columns[c + 3][i + 3]
          ) {
            if (columns[c][i] === "P1") {
              p1Diagonal = 1;
            } else {
              p2Diagonal = 1;
            }
          }
        }
      }
    }

    for (let c = columnsLength; c > 0; c--) {
      for (let i = 0; i < rowLength; i++) {
        if (
          columns[c] &&
          columns[c][i] &&
          columns[c - 1] &&
          columns[c - 2] &&
          columns[c - 3] &&
          columns[c - 1][i + 1] &&
          columns[c - 2][i + 2] &&
          columns[c - 3][i + 3]
        ) {
          if (
            columns[c][i] === columns[c - 1][i + 1] &&
            columns[c - 1][i + 1] === columns[c - 2][i + 2] &&
            columns[c - 2][i + 2] === columns[c - 3][i + 3]
          ) {
            if (columns[c][i] === "P1") {
              p1BackDiagonal = 1;
            } else {
              p2BackDiagonal = 1;
            }
          }
        }
      }
    }

    checkColumnsAndRows(
      p1Column,
      p2Column,
      p1Row,
      p2Row,
      p1Diagonal,
      p2Diagonal,
      p1BackDiagonal,
      p2BackDiagonal
    );
  };

  const checkColumnsAndRows = (
    p1Column: number,
    p2Column: number,
    p1Row: number,
    p2Row: number,
    p1Diagonal: number,
    p2Diagonal: number,
    p1BackDiagonal: number,
    p2BackDiagonal: number
  ) => {
    if (p1Column) {
      return setWinner(players["P1"]);
    }
    if (p2Column) {
      return setWinner(players["P2"]);
    }
    if (p1Row) {
      return setWinner(players["P1"]);
    }
    if (p2Row) {
      return setWinner(players["P2"]);
    }
    if (p1Diagonal) {
      return setWinner(players["P1"]);
    }
    if (p2Diagonal) {
      return setWinner(players["P2"]);
    }
    if (p1BackDiagonal) {
      return setWinner(players["P1"]);
    }
    if (p2BackDiagonal) {
      return setWinner(players["P2"]);
    }
  };


  const Wrapper = styled.div`
    width: 800px;
    height: 800px;
    display: flex;
    justifycontent: space-around;
    margin: 0 auto;
    background-image: url("paper.gif");
  `;

  const Column = styled.div`
    padding-top: 50px;
    width: 150px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Disk = styled.div`
    border-radius: 6px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    position: relative;
    -webkit-box-shadow: -1px 2px 82px -5px rgba(107, 94, 107, 0.59);
    -moz-box-shadow: -1px 2px 82px -5px rgba(107, 94, 107, 0.59);
    box-shadow: -1px 2px 82px -5px rgba(107, 94, 107, 0.59);
  `;

  const ColorFieldP1 = styled.div`
    position: absolute;
    border-radius: 50%;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ColorFieldP2 = styled.div`
    position: absolute;
    border-radius: 50%;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const FieldText = styled.div`
    color: dark grey;
    border-radius: 50%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    word-wrap: break-word;
    margin: 10px;
  `;

  const cleanBoard = () => {
    setWinner(null);
    setColumns(JSON.parse(JSON.stringify(initialState)));
  };

  return (
    <>
      {!!winner && `${winner} Win!`}
      <Wrapper>
        {columns.map((column: Array<string>, idx: number) => {
          return (
            <Column key={idx}>
              {column.map((element: string, i: number) => {
                return (
                  <Disk
                    key={i + "i"}
                    onClick={!!winner ? cleanBoard : () => clickHandler(idx, i)}
                  >
                    {element === "P1" ? (
                      <ColorFieldP1>
                        {" "}
                        <FieldText>{players.P1}</FieldText>
                      </ColorFieldP1>
                    ) : element === "P2" ? (
                      <ColorFieldP2>
                        <FieldText>{players.P2}</FieldText>
                      </ColorFieldP2>
                    ) : (
                      ""
                    )}
                  </Disk>
                );
              })}
            </Column>
          );
        })}
      </Wrapper>
    </>
  );
};

export default App;
