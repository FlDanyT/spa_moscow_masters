import '../App.css'
import { useState } from 'react'

function Goods(){
    
    const [goods, SetGoods] = useState([])

    const [postName,SetPostName] = useState('')
    const [postDscription,SetPostDscription] = useState('')
    const [postPrice,SetPostPrice] = useState('')

    const [putId,SetPutId] = useState('')
    const [putName,SetPutName] = useState('')
    const [putDscription,SetPutDscription] = useState('')
    const [putPrice,SetPutPrice] = useState('')

    const [deleteId,SetDeleteId] = useState('')

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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'name': postName, 'dscription': postDscription, 'price': postPrice})
        })

    }

    function putGoods() {

        fetch('http://127.0.0.1:8000/goods/' + putId + '/', {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({'name': putName, 'dscription': putDscription, 'price': putPrice})
        })

    }

    function deleteGoods() {

        fetch('http://127.0.0.1:8000/goods/' + deleteId + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    return (
        <div>

            <h1>Посмотреть все товары</h1>
            {
                goods.length === 0 ? ( 
                    <p></p>
                ) : (
                    goods.map((good) => ( 
                        <div> 
                        <p>{good.id}</p>
                        <p>{good.name}</p>
                        <p>{good.dscription}</p>
                        <p>{good.price}</p>
                        </div>
                    ))
                )
            }
            <button onClick={getGoods}>Посмотреть</button>

            <h1>Добавить товары</h1>
            <p>name</p>
            <input onChange={(e) => SetPostName(e.target.value)}></input>
            <p>dscription</p>
            <input onChange={(e) => SetPostDscription(e.target.value)}></input>
            <p>price</p>
            <input onChange={(e) => SetPostPrice(e.target.value)}></input>
            <button onClick={postGoods}>Добавить</button>

            <h1>Изменить товар</h1>
            <p>Id</p>
            <input onChange={(e) => SetPutId(e.target.value)}></input>
            <p>name</p>
            <input onChange={(e) => SetPutName(e.target.value)}></input>
            <p>dscription</p>
            <input onChange={(e) => SetPutDscription(e.target.value)}></input>
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