import React from 'react';
import { memo } from 'react';

const Child = (props) => {
    console.log("child");
  return (
    <div>
        <button onClick={props.click}>
            {props.name}
        </button>
    </div>
  )
}
// const Child = ({todos}) => {
// console.log("child render");
// return (
//   <>
//     <h2>My Todos</h2>
//     {todos.map((todo, index) => {
//       return <p key={index}>{todo}</p>;
//     })}
//   </>
// );
// };

export default memo(Child)