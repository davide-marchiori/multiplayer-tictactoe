import React from "react";
import PropTypes from "prop-types";

export function TicTacToeBoard({ ctx, G, moves }) {
  const onClick = (id) => moves.clickCell(id);

  console.log("ctx", ctx);
  console.log("G", G);

  let winner = "";
  if (ctx.gameover) {
    console.log("ctx.gameover", ctx.gameover);
    winner =
      ctx.gameover.winner !== undefined ? (
        <div id="winner">Winner: {ctx.gameover.winner}</div>
      ) : (
        <div id="winner">Draw!</div>
      );
  }

  const cellStyle = {
    border: "1px solid #555",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
  };

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id}>
          {G.cells[id] ? (
            <div style={cellStyle}>{G.cells[id]}</div>
          ) : (
            <button style={cellStyle} onClick={() => onClick(id)} />
          )}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
}

TicTacToeBoard.propTypes = {
  ctx: PropTypes.shape({
    gameover: PropTypes.shape({
      winner: PropTypes.string,
    }),
  }).isRequired,
  G: PropTypes.shape({
    cells: PropTypes.array.isRequired,
  }).isRequired,
  moves: PropTypes.shape({
    clickCell: PropTypes.func.isRequired,
  }).isRequired,
};
