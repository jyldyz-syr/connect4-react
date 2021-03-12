import { render } from "react-dom";
import React, { useEffect, useState } from "react";

const initialState: Array<Array<string>> = 
[
  [], 
  [], 
  [], 
  [], 
  [], 
  [], 
  []
];

const App = () => {
  const [columns, setColumns] = useState(
    JSON.parse(JSON.stringify(initialState))
  );

  const [players, setPlayers] = useState<any>({
    P1: "Player 1",
    P2: "Player 2",
  });

  const [currentPlayer, setCurrentPlayer] = useState<string>("P1");
  const [winner, setWinner] = useState<null|string>(null);

  const setPlayersOne = () => {
    let P1:string | null  ;
    let P2:string | null  ;

    P1 = window.prompt(`Enter your name`);
    P2 = window.prompt(`Enter your name`);

    if (
      P1 === P2 ||
      P1!=null && P1.length === 0 ||
      P2!=null && P2.length === 0 ||
      P1 && P1.trim().length === 0 ||
      P2 && P2.trim().length === 0
    ) {
      alert("Error: give different names to players");

      setPlayersOne();
    }

    return {
      P1,
      P2,
    };
  };

  useEffect(() => {
    const { P1, P2 } = setPlayersOne();

    setPlayers({ P1, P2 });
  }, []);

  const clickHandler = (id:number) => {
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
    columns.forEach((column:string[]) => {
      let p1Column:number = 0;
      let p2Column:number = 0;
      let p1Row:number = 0;
      let p2Row:number = 0;

      for (let i = 0; i < column.length; i++) {
        if (column[i] === column[i + 1]) {
          if (column[i] === "P1") {
            p1Column++;
            p2Column = 0;
          } else {
            p2Column++;
            p1Column = 0;
          }
        }
        for (let c = 0; c < columns.length; c++) {
          if (columns[c][i] && columns[c + 1] && columns[c + 1][i]) {
            if (columns[c][i] === columns[c + 1][i]) {
              if (columns[c][i] === "P1") {
                p1Row++;
                p2Row = 0;
              } else {
                p2Row++;
                p1Row = 0;
              }
            }
          }
        }
      }
      checkColumnsAndRows(p1Column, p2Column, p1Row, p2Row);
    });
  };

  const checkColumnsAndRows = (p1Column:number, p2Column:number, p1Row:number, p2Row:number) => {
    if (p1Column >= 3) {
      return setWinner(players["P1"]);
    }
    if (p2Column >= 3) {
      return setWinner(players["P2"]);
    }
    if (p1Row >= 3) {
      return setWinner(players["P1"]);
    }
    if (p2Row >= 3) {
      return setWinner(players["P2"]);
    }
  };

  const wrapperStyle:{[key:string]:string} = {
    width: "490px",
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
  };

  const columnStyle:{[key:string]:string} = {
    border: "1px solid black",
    width: "60px",
    height: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const getDiskStyle = (x:string|null) => ({
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
        {columns.map((column:Array<string>, idx:number) => {
          return (
            <div
              key={idx}
              style={columnStyle}
              onClick={!!winner ? cleanBoard : () => clickHandler(idx)}
            >
              {column.map((personDisc:string, i:number) => {
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
