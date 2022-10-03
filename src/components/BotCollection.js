import React from "react";
import BotCard from "./BotCard"

function BotCollection({ bots, botArmy, setBotArmy, setBotData }) {
  // Your code here
  const displayBotCards = bots.map((bot) => (
    <BotCard 
      key={bot.id} 
      bot={bot} 
      botArmy={botArmy} 
      setBotArmy={setBotArmy}
      setBotData={setBotData}
    />  
  ))

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {displayBotCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
