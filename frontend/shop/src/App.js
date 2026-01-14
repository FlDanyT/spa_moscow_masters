import logo from './logo.svg'; // src={logo} 
import './App.css';
import { use, useState } from 'react';

function App() {

  const [categories, setCotegories] = useState([])

  const [name, SetName] = useState("")
  const [description, SetDescription] = useState("")

  function getCategoriesClick() {
    fetch('http://127.0.0.1:8000/categories/')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCotegories(data)
    })
  }

  function postCategoriesClick() {

    fetch('http://127.0.0.1:8000/categories/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({"name": name, "description": description})
    }) 

  }

  return (
    <div className='App'>
      <h1>Посмотреть категории</h1>
      <button  onClick={getCategoriesClick}>Посмотреть</button>
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

      <h1>Добавить категорию</h1>
      <input onChange={(e) => SetName(e.target.value)}/>
      <input onChange={(e) => SetDescription(e.target.value)}/>
      <button onClick={postCategoriesClick}>Добавить</button>

      <h1>Изменить категорию</h1>
      <input/>
      <input/>
      <input/>
      <button>Изменить</button>

      <h1>Удалить категорию</h1>
      <input/>
      <button>Удалить</button>
    </div>
  );
}

export default App;