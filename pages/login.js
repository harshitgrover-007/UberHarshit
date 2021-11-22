import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import tw from "tailwind-styled-components";
import { auth, provider, github } from "../firebase";

const Login = () => {

  const router = useRouter();

  useEffect(() => { 
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push("/");
      }
    });
  
   }, []);

  return (
    <Wrapper>
      <Uber src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      From Harshit Grover
      <Title>Login to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <GoogleButton onClick={() => signInWithPopup(auth, provider)} >Sign in with Google</GoogleButton>
      
    </Wrapper>
  );
};

export default Login;

const Title = tw.div` text-5xl pt-4 text-gray-500`;

const HeadImage = tw.img`object-contain w-full`;

const Uber = tw.img`h-20 w-auto object-contain self-start`;

const Wrapper = tw.div` flex flex-col bg-gray-200 h-screen w-screen p-5 `;

const GoogleButton = tw.button` cursor-pointer bg-black text-white text-center py-3 mt-8 self-center w-full `;

const MicrosoftButton = tw.button`cursor-pointer bg-black text-white text-center py-3 mt-8 self-center w-full `;
