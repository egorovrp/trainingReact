import { tasks } from '../../../data';

//создаём функцию которая будет нам выводить содержимое объекта tasks
export default function ProductCard() {
  /*берём данные из tasks и создаём productsList 
  (в который при помощи метода map() 
  записываем нужные нам id(используем для key), title, description))
  */
  const productsList = tasks.map((product) => (
    <li key={product.id}>
      {product.title}: {product.description}
    </li>
  ));
  return <ul style={{ color: 'red' }}>{productsList}</ul>;
}
