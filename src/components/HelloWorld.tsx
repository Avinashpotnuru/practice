import React from 'react';

export const toggle = true;

const HelloWorld = () => {
  return (
    <div>
      {toggle ? <div>Hello World</div> : <div>hai world</div>}
    </div>
  );
}

export default HelloWorld;
