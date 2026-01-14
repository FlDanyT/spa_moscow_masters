Установка и создание проекта и приложения
```bash
npx create-react-app shop
```
Далее удаляем все не нужное.
** Работа с категориями **
Делаем верстку
```html
    <div className='App'>
      <h1>Посмотреть категории</h1>
      <button>Посмотреть</button>

      <h1>Добавить категорию</h1>
      <input placeholder='name'/>
      <input placeholder='description'/>
      <button>Добавить</button>

      <h1>Изменить категорию</h1>
      <input placeholder='id'/>
      <input placeholder='name'/>
      <input placeholder='description'/>
      <button>Изменить</button>

      <h1>Удалить категорию</h1>
      <input placeholder='id'/>
      <button>Удалить</button>
    </div>
```
Get запрос к api
```javascript
import { useState } from 'react';

const [categories, setCotegories] = useState([])

function getCategoriesClick() {
    fetch('http://127.0.0.1:8000/categories/')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCotegories(data)
    })
}
```
```html
<button onClick={getCategoriesClick}>Посмотреть</button>
```
Выводим данные
```html
{ categories.length === 0 ? (
        <p></p>
      )  : (
        categories.map((cat) => (
          <div key={cat.id}>
              <h1>{cat.name}</h1>
              <p>{cat.description}</p>
            </div>
        ))
)}