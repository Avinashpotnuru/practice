import React from "react";
interface Props {
  name?: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};
const Heading = ({ name,setName }:Props ) => {
   

  return (
    <>
      <div>Heading {name}</div>
      <button onClick={()=>setName("jessy")}>change name</button>
    </>
  );
};

export default Heading;
