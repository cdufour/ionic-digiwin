import { useState } from 'react';

function Counter() {

  const students: string[] = 
    ["Paul", "Camille", "Stevens", "Mike"];

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1); // dom re-render
  };

  const decrement = () => {
    setCount(count - 1); // dom re-render
  };

  const studentList = students.map(
    student => (<li key={student} className="student">{student}</li>));

  return (
    <div>
      <p>{count}</p>
      <button onClick={ () => increment() }>Increment</button>
      <button onClick={ () => decrement() }>Decrement</button>

      {count > 10 &&
        <div>ça suffit !</div>
      }

      <ul>
        {studentList}
      </ul>
    </div>
  )
}

export default Counter;