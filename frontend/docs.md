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
      <input/>
      <input/>
      <button>Добавить</button>

      <h1>Изменить категорию</h1>
      <input/>
      <input/>
      <input/>
      <button>Изменить</button>

      <h1>Удалить категорию</h1>
      <input/>
      <button>Удалить</button>
    </div>
```
** Get запрос к api. Просмотр категорий. **
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
              <h1>{cat.id}</h1>
              <h1>{cat.name}</h1>
              <p>{cat.description}</p>
            </div>
        ))
)}
```
** Post запрос к api. Добавление категорий **
```javascript
const [name, SetName] = useState("")
const [description, SetDescription] = useState("")

function postCategoriesClick() {

    fetch('http://127.0.0.1:8000/categories/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({"name": name, "description": description})
    }) 

}
```
```html
<h1>Добавить категорию</h1>
<input onChange={(e) => SetName(e.target.value)}/>
<input onChange={(e) => SetDescription(e.target.value)}/>
<button onClick={postCategoriesClick}>Добавить</button>
```
** PUT запрос к api. Изменение категорий **
```javascript
const [updateId, SetUpdateId] = useState("")
const [updateName, SetUpdateName] = useState("")
const [updateDescription, SetUpdateDescription] = useState("")

function updateCategoriesClick() {

    fetch('http://127.0.0.1:8000/categories/' + updateId + '/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({"name": updateName, "description": updateDescription})
    })

}
```
```html
<h1>Изменить категорию</h1>
<input onChange={(e) => SetUpdateId(e.target.value)}/>
<input onChange={(e) => SetUpdateName(e.target.value)}/>
<input onChange={(e) => SetUpdateDescription(e.target.value)}/>
<button onClick={updateCategoriesClick}>Изменить</button>
```