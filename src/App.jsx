
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={() => {
        if (task.trim()) {
          setList([...list, task]);
          setTask('');
        }
      }}>Add</button>

      {list.map((t, i) => <p key={i}>
        {t} <button onClick={() =>
          setList(list.filter((_, j) => j !== i))
        }>Delete</button>
      </p>)}
    </div>
  );
}

export default App;
