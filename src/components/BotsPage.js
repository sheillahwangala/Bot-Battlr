import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botData, setBotData] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((response) => response.json())
    .then((data) => setBotData(data));
  }, []);

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData} />
      <BotCollection bots={botData} botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData} />
    </div>
  );
}

export default BotsPage;
