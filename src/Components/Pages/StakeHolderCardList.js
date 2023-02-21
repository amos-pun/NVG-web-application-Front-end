import React from "react";
import Card from "./Card";

const StakeHolderCardList = ({ robots }) => {
  return (
    <div className="text-center container">
        <div className="row">
            {robots.map((user, i) => { 
                return (
                <Card
                    key={i}
                    id={robots[i].id}
                    img = {robots[i].img}
                    name={robots[i].name}
                />
                );
            })}
        </div>
    </div>
  );
};

export default StakeHolderCardList;
