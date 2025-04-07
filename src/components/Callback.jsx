import React, { useState } from 'react'
import Child from './Child';
import { useCallback } from 'react';

const Callback = () => {
   const[count,setCount] = useState(0);

   const handleClick= useCallback(() => {
    setCount(count+1);    
   },[count])

   const increment = useCallback(() =>{
    console.log("test");
   })
  
  return (
    <div>
      <div>Count : {count} </div> 
      <div>
        <button onClick={handleClick}>Click</button>
      </div>

      <div>
        <Child name="AddBy10" click={increment} />
      </div>
    </div>
  )
}

// const [count, setCount] = useState(0);
// const [todos, setTodos] = useState(["todo 1", "todo 2","3"]);

// const increment = () => {
//   setCount((c) => c + 1);
// };

// return (
//   <>
//     <Child todos={todos} />
//     <hr />
//     <div>
//       Count: {count}
//       <button onClick={increment}>+</button>
//     </div>
//   </>
// );
// };

export default Callback