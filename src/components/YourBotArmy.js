import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, setBotArmy, setBotData }) {
  //your bot army code here...
  const botArmyCollection = botArmy.map((bot) => (
    <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData} />
  ))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {botArmyCollection}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
