import { onAuthStateChanged } from "firebase/auth";
import React, {useEffect, useState} from "react";
import tw from "tailwind-styled-components";
import { auth } from "../firebase";

const Table = () => {
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
     
              
                  <Name>Name: { user && user.name}</Name>
        
      
    </Wrapper>
  );
};

export default Table;

const Name = tw.div`mb-25`

const UberImage = tw.div``

const Box = tw.div`p-20 `;

const Wrapper = tw.div`p-12 mt-5 bg-gray-200 p-20 w-1/0 h-12 mr-10 ml-10 rounded-lg shadow-sm`;
