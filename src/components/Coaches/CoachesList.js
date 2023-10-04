import React from "react";
import { players } from "../../assets/data/players";
import CoachesCard from "./CoachesCard";

const CoachesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {players.map((player)=> 
      <CoachesCard key={player.id} player={player}/>
      )}
    </div>
  );
};

export default CoachesList;
