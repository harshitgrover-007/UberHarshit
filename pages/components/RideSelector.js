import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { CArList } from "../carList";

import Link from "next/link";

const RideSelector = ({ pickCoordinates, dropCoordinates }) => {

  const [rideDuration, setRideDuration] = useState([0])

  useEffect(() => {
     rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickCoordinates[0]}, ${pickCoordinates[1]}; ${dropCoordinates[0]}, ${dropCoordinates[1]}?access_token=pk.eyJ1IjoiaGFyc2hpdGdyb3ZlcjAwNyIsImEiOiJja3cwanFnNHcwemwxMnhub3NmdmF6bzVwIn0.Lm6wj8mNTiCa4BlmA2lBNg`
    ).then((res) => res.json())
      .then(data => {
        setRideDuration(data.routes[0].duration / 100 )
      
    } )
  }, [pickCoordinates, dropCoordinates])
 
  return (
    <Wrapper>
      <Titl>Choose a ride, or swipe up for more</Titl>
      <CarList>
        {CArList.map((car, index) => (
          <Car key={index}>
            
              <CarImage src={car.imgUrl} />
            <Link href="/reserve" passHref>
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
              </CarDetails>
              </Link>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Service = tw.div`font-medium`;

const CarDetails = tw.div`flex-1 cursor-pointer`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div`text-sm font-medium`;

const Car = tw.div`
flex p-4 items-center
`;

const CarImage = tw.img`
h-14 mr-2 `;

const Titl = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`overflow-y-scroll`;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
