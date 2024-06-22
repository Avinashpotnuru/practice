import React from 'react'

interface Test3Props {
  toggleStatus: boolean;
  eventFunction: () => void;

}

const Test3 = ({toggleStatus,eventFunction}:Test3Props) => {

  
  return (
    <div>
<button onClick={eventFunction}>Toggle Alert</button>

    </div>
  )
}

export default Test3