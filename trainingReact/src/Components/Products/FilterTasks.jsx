import { tasks } from '../../../data';
import { useState } from 'react';

export default function SearchFilter() {
  const [tasks, setTasks] = useState(tasks);
  const [searchTask, setSearchTask] = useState('');
  function goSearchTask() {
    if (searchTask === '') {
      setTasks(tasks);
      return;
    }
    const nameFunction = tasks.filter((title) => {
      if (title.toLowerCase().includes(searchTask.toLowerCase())) {
        return title;
      }
    });
    setTasks(nameFunction);
  }
  return (
    <section>
      <h3>Поиск здачи:</h3>
      <input
        onChange={(element) => setSearchTask(element.target.value)}
      ></input>
      <Button onClick={goSearchTask} />
      <div>
        {tasks.map((task) => {
          return <div className="result">{task}</div>;
        })}
      </div>
    </section>
  );
}
