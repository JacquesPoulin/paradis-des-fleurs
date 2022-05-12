import React from "react";
import heroes from "../../data/heroes";

// on crée le header de la page Add
const HeroAdd = () => {
  return (
    <div
      className={`flex flex-col m-0 bg-[url('../assets/images/heroes2.jpg')] h-96 bg-cover`}
    >
      <h1 className="font-primary m-5 mt-20 mb-10 text-4xl text-center text-slate-50">
        {heroes[1].title}
      </h1>
      <p className="font-regular m-5 text-xl text-center text-slate-50">
        {heroes[1].txt}
      </p>
    </div>
  );
};

export default HeroAdd;
