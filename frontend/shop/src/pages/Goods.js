import '../App.css'
import { useState } from 'react'

function Goods(){
    
    const [goods, SetGoods] = useState([])

    const [postName,SetPostName] = useState('')
    const [postDescription,SetPostDescription] = useState('')
    const [postPrice,SetPostPrice] = useState('')

    const [putId,SetPutId] = useState('')
    const [putName,SetPutName] = useState('')
    const [putDescription,SetPutDescription] = useState('')
    const [putPrice,SetPutPrice] = useState('')

    const [deleteId,SetDeleteId] = useState('')

    const [registerName, SetRegisterName] = useState('')
    const [registerPassword, SetRegisterPassword] = useState('')

    const [loginName, SetLoginName] = useState('')
    const [loginPassword, SetLoginPassword] = useState('')
    const [token, setToken] = useState('')

    function register() {
        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': registerName, 'password': registerPassword})
        })
    }

    function login() {
        fetch('http://127.0.0.1:8000/api/login/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': loginName, 'password': loginPassword})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setToken(data)
        })
    }

    function getGoods() {

        fetch('http://127.0.0.1:8000/goods/')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            SetGoods(data)
        })

    }

    function postGoods() {
        fetch('http://127.0.0.1:8000/goods/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token.token
            },
            body: JSON.stringify({'name': postName, 'description': postDescription, 'price': postPrice})
        })

    }

    function putGoods() {

        fetch('http://127.0.0.1:8000/goods/' + putId + '/', {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': 'Token ' + token.token
            },
            body: JSON.stringify({'name': putName, 'description': putDescription, 'price': putPrice})
        })

    }

    function deleteGoods() {

        fetch('http://127.0.0.1:8000/goods/' + deleteId + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token.token
            }
        })

    }

    return (
        <div>

            <p>Имя</p>
            <input onChange={(e) => SetRegisterName(e.target.value)}></input>
            <p>Пороль</p>
            <input onChange={(e) => SetRegisterPassword(e.target.value)}></input>
            <button onClick={register}>Зарегистрироваться</button>

            <p>Имя</p>
            <input onChange={(e) => SetLoginName(e.target.value)}></input>
            <p>Пороль</p>
            <input onChange={(e) => SetLoginPassword(e.target.value)}></input>
            <button onClick={login}>Войти в аккаунт</button>

            <h1>Посмотреть все товары</h1>
            {
                goods.length === 0 ? ( 
                    <p></p>
                ) : (
                    goods.map((good) => ( 
                        <div> 
                        <p>{good.id}</p>
                        <p>{good.name}</p>
                        <p>{good.description}</p>
                        <p>{good.price}</p>
                        </div>
                    ))
                )
            }
            <button onClick={getGoods}>Посмотреть</button>

            <h1>Добавить товары</h1>
            <p>name</p>
            <input onChange={(e) => SetPostName(e.target.value)}></input>
            <p>description</p>
            <input onChange={(e) => SetPostDescription(e.target.value)}></input>
            <p>price</p>
            <input onChange={(e) => SetPostPrice(e.target.value)}></input>
            <button onClick={postGoods}>Добавить</button>

            <h1>Изменить товар</h1>
            <p>Id</p>
            <input onChange={(e) => SetPutId(e.target.value)}></input>
            <p>name</p>
            <input onChange={(e) => SetPutName(e.target.value)}></input>
            <p>description</p>
            <input onChange={(e) => SetPutDescription(e.target.value)}></input>
            <p>price</p>
            <input onChange={(e) => SetPutPrice(e.target.value)}></input>
            <button onClick={putGoods}>Изменить</button>

            <h1>Удалить товар</h1>
            <p>Id</p>
            <input onChange={(e) => SetDeleteId(e.target.value)}></input>
            <button onClick={deleteGoods}>Удалить</button>

        </div>
    )
    
}

export default Goods;