import React from "react";
import tw from "tailwind-styled-components";

const Table = () => {
  return (
    <Wrapper>
      <Box>
        <L></L>
      </Box>
    </Wrapper>
  );
};

export default Table;

const L = tw.div`p-12 w-30`

const Box = tw.div`p-10 w-10`;

const Wrapper = tw.div`  mt-5 bg-white flex flex-col flex-2 mr-10 ml-10 rounded-lg shadow-sm`;
