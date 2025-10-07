import React, { useEffect, useState } from "react";

//the star will have an id, size, x, y ,opacity, and an animationDuration
export const StarBackground = ({
  amountOfStars = 10000,
  amountOfMeteors = 5,
}) => {
  //will accept some amount of stars, default 10000
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const getRandomColor = () => {
    const whites = [
      "#ffffff", // pure white
      "#f5f5f5", // light grayish white
      "#eeeeee", // slightly dimmer
      "#dddddd", // cooler white
      "#cccccc", // very soft
      "#fafafa", // warm soft white
      "#e0e0e0", // shadowy white
    ];
    return whites[Math.floor(Math.random() * whites.length)];
  };

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);
  //making stars BG
  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / amountOfStars
    ); //change stars amount by changing the 10000
    const createStars = [];
    for (let i = 0; i < numOfStars; i++) {
      createStars.push({
        id: i,
        size: Math.random() * 3 + 1, // This means to generate stars between 1 to 4 px
        x: Math.random() * 100, //This sets the positions of the stars being generated in x axis, the 100 is a percentage
        y: Math.random() * 100, //This sets the positions of the stars being generated in y axis, the 100 is a percentage
        opacity: Math.random() * 0.5 + 0.5, //make stars look faint and some solid
        animationDuration: Math.random() * 4 + 2, //setting the animation between 2 and 6 sec, In our css we have animation of pulsation thus some will pulsate faster than others
      });
    }
    setStars(createStars);
  };
  //making meteors fall in BG
  const generateMeteors = () => {
    const numOfMeteors = amountOfMeteors; //change meteor amount by changing the  parameter
    const createMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      createMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // This means to generate stars between 1 to 4 px
        x: Math.random() * 100, //This sets the positions of the stars being generated in x axis, the 100 is a percentage
        y: Math.random() * 20, //This sets the positions of the stars being generated in y axis, the 100 is a percentage
        delay: Math.random() * 15, //make stars look faint and some solid
        animationDuration: Math.random() * 3 + 3, //setting the animation between 3 and 7 sec, In our css we have animation of pulsation thus some will pulsate faster than others
        color: getRandomColor(),
      });
    }
    setMeteors(createMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        ></div>
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor rounded-full"
          style={{
            background: meteor.color,
            boxShadow: `0 0 10px ${meteor.color}`,
            width: meteor.size * (Math.random() * 50) + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};
