import React from "react";
import CoachesCard from "../../components/Coaches/CoachesCard";
import { players } from "../../assets/data/players";
import Testimonial from "../../components/Testimonial";
import { Link } from "react-router-dom";

const Players = () => {
  return (
    <> 
    <section className="bg-[#fff9EA]">
      <div className="container text-center">
        <h2 className="heading">Find a Coach</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Search Coach"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
        </div>
       </div>
    </section>

    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {players.map((player)=> 
      <CoachesCard key={player.id} player={player}/>
      )}
    </div>

      </div>

    </section>


    <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Players feedback</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our systems offer unmatched expert
              coaching for players.
            </p>
            </div>
            <Testimonial/>
        </div>
      </section>



    </>


    

 
  );
};

export default Players;
