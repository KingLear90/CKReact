import React from "react";
import { useState, useEffect } from "react";
function AnalyzeApi() {
    const [game, setGame] = useState();

    async function postChessApi (data = {}) {
        const response = await fetch('https://chess-api.com/v1', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json() = setGame}

  postChessApi({ fen: "8/1P1R4/n1r2B2/3Pp3/1k4P1/6K1/Bppr1P2/2q5 w - - 0 1" }).then((data) => {
    console.log(data);
});

postChessApi({ input: document.querySelector('.moves-list').outerHTML }).then((data) => {
  console.log(data);
});
    
  return (
    <div>
      
    </div>
  )

}

export default AnalyzeApi
