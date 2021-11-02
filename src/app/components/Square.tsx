import React from 'react';

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

function Square(props: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

// import React, { useState } from 'react'

// function Square(props) {
//   // `value` is the state and `setValue` is the setter function
//   const [value, setValue] = useState(null);

//   return (
//     <button className="square" onClick={() => alert('click')}>
//       {props.value}
//     </button>
//   );
// }

export default Square;
