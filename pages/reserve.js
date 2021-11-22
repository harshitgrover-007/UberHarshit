import { onAuthStateChanged } from "firebase/auth";
import Tableis from "./Tableis";
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { auth } from "../firebase";
import Table from "./Table";
import Table1 from "./Table1";

const Reserve = () => {
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
      <Header>
        <Profile>
          <UberLogo src="https://th.bing.com/th/id/R.f909de86670092a4cb75e212dd2b2c9b?rik=T8PTCLS%2bkVLSTg&riu=http%3a%2f%2fmedia-s3-us-east-1.ceros.com%2fpitchbook%2fimages%2f2018%2f08%2f24%2f0431c2b43c7537a52c72f1358d052d38%2fuber-logo-white.png&ehk=BV5wHYdEiedhokh0NapMgXetGnI7yx8S8yLkBw%2fM5NI%3d&risl=&pid=ImgRaw&r=0" />{" "}
          <TThe>
            <Named>From Harshit</Named>
          </TThe>
          <Name>{user && user.name} </Name>
          <UserImage src={user && user.photoUrl} />
        </Profile>
        <UD>
          <L>
            <Table />
            <H>
              <Tableis />
            </H>
          </L>
        </UD>
      </Header>
    </Wrapper>
  );
};

export default Reserve;

const K = tw.div`ml-44`;

const L = tw.div`flex flex-col`;

const H = tw.div` mt-5`;

const UD = tw.div``;

const TThe = tw.div``;

const Named = tw.div`mr-44 py-2 mb-8 mt-7`;

const BTN = tw.div`flex flex-2 bg-black`;

const Box = tw.button`p-23 text-xl font-medium text-white`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;

const ActionButtons = tw.div`
flex
`;

const ActionButtonImage = tw.img` 
h-3/5
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl duration-300 ease-in-out cursor-pointer
`;

const Wrapper = tw.div`
flex flex-col bg-gray-200 text-center justify-center 
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`       
bg-gray-200 h-screen
`;

const UberLogo = tw.img`
h-6
`;

const Profile = tw.div`
flex  text-center  justify-between h-20 items-center bg-black text-white mb-9
`;

const Name = tw.div`
ml-44 w-20 font-medium mt-5
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px mt-5
`;
