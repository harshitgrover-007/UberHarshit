import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { auth } from "../firebase";
import Tableis from "./Tableis";

const Table = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  console.log(setPickup);
  console.log(setDropoff);

  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <Wrapper>
      <Box>
        <L>
          Order Summary
          <br />
          Car - <Img src="https://i.ibb.co/cyvcpfF/uberx.png" /> UberX
        </L>
      </Box>
    </Wrapper>
  );
};

export default Table;

const Img = tw.img`h-14 mr-2 w-14`;

const K = tw.div`py-4`;

const H = tw.h1`text-2xl font-bold`;

const Bod = tw.div`mt-5 mb-5`;

const Bh = tw.button``;

const Name = tw.div`mr-25`;

const L = tw.div` flex flex-col ml-20 w-60 text-center justify-center py-12`;

const Box = tw.div` w-70`;

const Wrapper = tw.div`w-60 mb-5 py-4 bg-white mr-10 ml-10 rounded-lg shadow-sm w-2/3`;
