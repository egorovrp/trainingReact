import { tasks } from '../../../data';

//создаём функцию которая будет нам выводить содержимое объекта tasks
export default function ProductCard() {
  /*берём данные из tasks и создаём productsList 
  (в который при помощи метода map() 
  записываем нужные нам id(используем для key), title, description))
  */
  const taskList = tasks.map((tasks) => (
    <li key={tasks.id}>
      {tasks.title}: {tasks.description}
    </li>
  ));
  return <ul style={{ color: 'red' }}>{taskList}</ul>;
}
