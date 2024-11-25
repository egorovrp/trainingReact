import { useState } from 'react';
import { tasks } from '../../../data';

export default function ProductCard() {
  const [filter, setFilter] = useState('');

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  const taskList = tasks.map((tasks) => (
    <li key={tasks.id}>
      {tasks.title}: {tasks.description}
    </li>
  ));

  return (
    <>
      <input
        className="inputFilter"
        type="text"
        value={taskList.title}
        onChange={changeHandler}
        placeholder="Поиск..."
      />
      <ul>
        <h3 style={{ color: 'black' }}>Сложность заданий:</h3>
        {tasks
          .filter((task) =>
            task.title.toLowerCase().includes(filter.toLowerCase()),
          )
          .map((task) => {
            return (
              <>
                <li className="result" key={task.id}>
                  {task.title} : {task.description}
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
