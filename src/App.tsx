import { render } from "react-dom";
import React, { useEffect, useState } from "react";

const initialState: Array<Array<string>> = [[], [], [], [], [], [], []];

const App = () => {
  const [columns, setColumns] = useState<Array<[string]>>(
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

  const clickHandler = (id: number) => { 
    const newArr = columns;

    if (newArr[id].length >= 6) return;

    newArr[id].push(currentPlayer);

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

  const wrapperStyle: { [key: string]: string } = {
    width: "490px",
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
  };

  const columnStyle: { [key: string]: string } = {
    border: "1px solid black",
    width: "60px",
    height: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const getDiskStyle = (x: string | null) => ({
    width: "50px",
    height: "50px",
    marginBottom: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: x === "P1" ? "black" : "red",
    color: x === "P1" ? "white" : "yellow",
  });

  const cleanBoard = () => {
    setWinner(null);
    setColumns(JSON.parse(JSON.stringify(initialState)));
  };

  return (
    <>
      {!!winner && `${winner} Win!`}
      <div style={wrapperStyle}>
        {columns.map((column: Array<string>, idx: number) => {
          return (
            <div
              key={idx}
              style={columnStyle}
              onClick={!!winner ? cleanBoard : () => clickHandler(idx)}
            >
              {column.map((personDisc: string, i: number) => {
                const currentDiscStyle = getDiskStyle(personDisc);
                return (
                  <div key={i} style={currentDiscStyle}>
                    {players[personDisc]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
