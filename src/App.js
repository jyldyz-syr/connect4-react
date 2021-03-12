// import React, { useEffect, useState } from "react";

// const initialState = [[], [], [], [], [], [], []];

// const Game = () => {
//   const [columns, setColumns] = useState(initialState);
//   const [players, setPlayers] = useState({
//     P1: "Jack",
//     P2: "Mike",
//   });
//   const [currentPlayer, setCurrentPlayer] = useState("P1");
//   const [winner, setWinner] = useState(null);

//   useEffect(() => {
//     let P1;
//     P1 = window.prompt(`Enter your name? ,${players.P1}`);
//     let P2;
//     P2 = window.prompt(`Enter your name? ,${players.P2}`);

//     setPlayers({ P1, P2 });
//   }, []);

//   const clickHandler = (id) => {
//     const newArr = columns;

//     if (newArr[id].length >= 6) return;

//     newArr[id].push(currentPlayer);

//     if (currentPlayer === "P1") {
//       setCurrentPlayer("P2");
//     } else {
//       setCurrentPlayer("P1");
//     }

//     checkWinner();
//   };

//   const checkWinner = () => {
//     columns.forEach((column) => {
//       let p1Column = 0;
//       let p2Column = 0;
//       let p1Row = 0;
//       let p2Row = 0;

//       for (let i = 0; i < column.length; i++) {
//         if (column[i] === column[i + 1]) {
//           if (i === "P1") {
//             p1Column++;
//             p2Column = 0;
//           } else {
//             p2Column++;
//             p1Column = 0;
//           }
//           for (let c = 0; c < columns.length; c++) {
//             if (columns[c][i] && columns[c + 1] && columns[c + 1][i]) {
//               if (columns[c][i] === columns[c + 1][i]) {
//                 // console.log(columns[c][i])
//                 if (columns[c][i]=== "P1") {
//                   p1Row++;
//                   p2Row = 0;
//                 } else {
//                   p2Row++;
//                   p1Row = 0;
//                 }
//               }
//             }
//           }
//         }
//       }

//       checkColumnsAndRows(p1Column, p2Column, p1Row, p2Row);
//     });
//   };

//   const checkColumnsAndRows = (p1Column, p2Column, p1Row, p2Row) => {
//     if (p1Column >= 3) {
//       return setWinner(players["P1"]);
//     }
//     if (p2Column >= 3) {
//       return setWinner(players["P2"]);
//     }
//     if (p1Row >= 4) {
//       return setWinner(players["P1"]);
//     }
//     if (p2Row >= 4) {
//       return setWinner(players["P2"]);
//     }
//   };

//   const wrapperStyle = {
//     width: "490px",
//     display: "flex",
//     justifyContent: "space-around",
//     margin: "0 auto",
//   };

//   const columnStyle = {
//     border: "1px solid black",
//     width: "60px",
//     height: "360px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const getDiskStyle = (x) => ({
//     width: "50px",
//     height: "50px",
//     marginBottom: "5px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: "50%",
//     backgroundColor: x === "P1" ? "black" : "red",
//     color: x === "P1" ? "white" : "yellow",
//   });

//   return (
//     <>
//       {!!winner && `${winner} Win!`}
//       <div style={wrapperStyle}>
//         {columns.map((column, idx) => {
//           const clickWithId = () => clickHandler(idx);
//           return (
//             <div key={idx} style={columnStyle} onClick={clickWithId}>
//               {column.map((personDisc, i) => {
//                 const currentDiscStyle = getDiskStyle(personDisc);
//                 return (
//                   <div key={i} style={currentDiscStyle}>
//                     {players[personDisc]}
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Game;
