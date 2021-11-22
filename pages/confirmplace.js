import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";


const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickCoordinates, setPickCoordinates] = useState([0, 0]);
  const [dropCoordinates, setDropCoordinates] = useState([0, 0]);



  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGFyc2hpdGdyb3ZlcjAwNyIsImEiOiJja3cwanFnNHcwemwxMnhub3NmdmF6bzVwIn0.Lm6wj8mNTiCa4BlmA2lBNg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaGFyc2hpdGdyb3ZlcjAwNyIsImEiOiJja3cwanFnNHcwemwxMnhub3NmdmF6bzVwIn0.Lm6wj8mNTiCa4BlmA2lBNg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("DropOff");
        setDropCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonCon>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonCon>
      <Map
        pickCoordinates={pickCoordinates}
        dropCoordinates={dropCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickCoordinates={pickCoordinates}
          dropCoordinates={dropCoordinates}
        />
        <ConfirmButton>
          <ConfirmBtn >Confirm </ConfirmBtn>
        </ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ButtonCon = tw.div`rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`;

const BackButton = tw.img`h-full object-contain`;

const ConfirmBtn = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer `;

const ConfirmButton = tw.div`
border-t-2

`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const Wrapper = tw.div`
flex h-screen flex-col h-1/2
`;
