**Делаем структуру проекта:**
    ├── index.html
    ├── login.html
    ├── register.html
    ├── profile.html
    ├── add.html
    ├── orders-management.html
    ├── search.html
    ├── result.html
    │
    ├── css/
    │   └── style.css
    │
    ├── images/
    │
    └── design/
        └── *.png
**Главная - Landing Page index.html**
**Сначала делаем html без css с картинками**
Подключаем лого и меняем название
```html
<title>Главная</title>
<head>
    <link rel="icon" href="images/logo.png"/>
</head>
```
**Делаем шапку**
```html
<header>
            <ul>
            <img src="images/logo.png" style="margin-right: 20px;"/>
            <li>
                <a href="search.html">Поиск</a>
            </li>
            <li>
                <a href="login.html">Войти</a>
            </li>
            <li>
                <a href="profile.html">Личный кабинет</a>
            </li>
            <li>Избранное</li>
            <li>Бронирования</li>
            <li>Мои заказы</li>
            <li>Номер телефона</li>
            <li>Уведомления</li>
            <li>Задать вопрос</li>
            </ul>        
</header>
```
**Делаем слайдер**
```html
            <div>
                <img src="images/hotel.jpg"/>
                <p>Россия, Сочи</p>
                <p>Красивый отель в Сочи в 5км от моря</p>
                <a href="result.html">
                    <button>Подробнее</button>
                </a>
                <button>Следующий слайд</button>
            </div>
```
**Секция с быстрым поиском отеля**
```html
<div>
        <input placeholder="Название отлея"/>
        <a href="result.html">
                <button>Найти</button>
        </a>
</div>
```
**Факты о компании и сайте**
```html
            <div>
                <ul>
                    <li>Низкие цены</li>
                    <img src="images/low_prices.jpg"/>
                </ul>

                <ul>
                    <li>Отели по всей стране</li>
                    <img src="images/hotels_throughout_country.png"/>
                </ul>

                <ul>
                    <li>Заботливая поддержка 24/7</li>
                    <img src="images/support.png"/>
                </ul>
            </div>
```
**Карточки с популярными отелями**
```html
            <div>
                <div>
                    <img src="images/hotel1.png"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
                <div>
                    <img src="images/hotel2.png"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
                <div>
                    <img src="images/hotel3.jpeg"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
                <div>
                    <img src="images/hotel4.jpeg"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
                <div>
                    <img src="images/hotel5.jpeg"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
                <div>
                    <img src="images/hotel6.jpeg"/>
                    <p>Город</p>
                    <p>Номер телефона</p>
                    <p>Адрес</p>
                    <p>Начальная стоимость номера</p>
                </div>
            </div>
```
**Форма поиска**
```html
<div>
    <input placeholder="Направление/город, страна"/>
    <input placeholder="Даты заезда-отъезда"/>
    <input placeholder="Количество гостей"/>
    <a href="search.html">
        <button>Поиск</button>
    </a>
</div>
```
**Форма для подписки на новости сервиса**
```html
<div>
    <input placeholder="Email"/>
    <input type="checkbox"/>
    <label for="myCheckbox">Согласен на обработку персональных данных</label>
    <button>Подписка</button>
 </div>
```
**Подвал сайта**
```html
<footer>
    <div>
        <p>8-800-777-55-77</p>
        <p>hotel@hotel.ru</p>
        <p>Клиентам</p>
        <p>Партнерам</p>
        <p>О нас</p>
        <p>Контакты</p>
    </div>
            <ul>
            <img src="images/logo.png" style="margin-right: 20px;"/>
            <li>
                <a href="search.html">Поиск</a>
            </li>
            <li>
                <a href="login.html">Войти</a>
            </li>
            <li>
                <a href="profile.html">Личный кабинет</a>
            </li>
            <li>Избранное</li>
            <li>Бронирования</li>
            <li>Мои заказы</li>
            <li>Номер телефона</li>
            <li>Уведомления</li>
            <li>Задать вопрос</li>
            </ul>      
</footer>
```
**Страница входа в личный кабинет login.html**
**Подключаем лого и меняем название**
```html
<title>Страница входа в личный кабинет</title>
<link rel="icon" href="images/logo.png"/>
```
**Форма**
```html
<div>
    <form>  
        <input placeholder="e-mail"/>
        <input placeholder="Пароль"/>
    </form>
    <button>Вход</button>
    <button>Восстановить пароль</button>
</div>
```
**Меню зарегистрироваться**
```html
    <div>
        <a href="register.html">Зарегистрироваться</a>
    </div>
```
**Страница регистрации в личном кабинете. register.html**
**Подключаем лого и меняем название**
```html
    <title>Страница регистрации в личном кабинете</title>
    <link rel="icon" href="images/logo.png"/>
```
**Форма**
```html
    <div>
        <form>
            <input placeholder="e-mail"/>
            <input placeholder="Имя"/>
            <input placeholder="Фамилия"/>
            <input placeholder="Телефон"/>
            <input placeholder="Пароль"/>
            <input placeholder="Повтор пароля"/>
        </form>
        <button>Подтверждаю согласие на обработку данных</button>
        <button>Зарегистрироваться</button>
    </div>
```
**Страница личного кабинета пользователя profile.html**
**Подключаем лого и меняем название**
```html
<title>Страница личного кабинета пользователя</title>
<link rel="icon" href="images/logo.png"/>
```
**Информация**
```html
    <div>
        <h1>Профиль</h1>
        <input placeholder="ФИО"/>
        <button>Изменить</button>
        <input placeholder="Паспортные данные( серия, номер )"/>
        <button>Изменить</button>
        <input placeholder="Номер телефона"/>
        <button>Изменить</button>
        <input placeholder="e-mail"/>
        <button>Изменить</button>
        <p>Количество избранных отелей: </p>
        <p>Количество забронированных отелей: </p>
        <p>Даты проживания: </p>
        <p>Стоимость проживания: </p>
    </div>
```
**Информация отмене бронирования**
```html
   <div>
        <p>Информация отмене бронирования</p>
        <ul>
            <li>Платная</li>
            <li>
                <div>
                    <p>Дата заезда</p>
                    <p>Дата выезда</p>
                    <p>Комментарий к брони</p>
                    <img/>
                    <button>Удалить</button>
                    <button>Редактировать</button>
                </div>
            </li>
        </ul>
        <ul>
            <li>Бесплатная</li>
            <li>
                <div>
                    <p>Дата заезда</p>
                    <p>Дата выезда</p>
                    <p>Комментарий к брони</p>
                    <img/>
                    <button>Удалить</button>
                    <button>Редактировать</button>
                </div>
            </li>
        </ul>
    </div>
```
**Страница добавления информации об отеле add.html**
**Подключаем лого и меняем название**
```html
<title>Страница добавления информации об отеле</title>
<link rel="icon" href="images/logo.png"/>
```
**Для сотрудника предусмотрена возможность создать профиль**
```html
            <div>
                <a href="register.html">
                <button>Создать профиль</button>
                </a>
            </div>
```
**Для сотрудника предусмотрена возможность создать профиль**
            <div>
                <button>Создать профиль</button>
            </div>
**Поля, которые необходимо заполнить пользователю**
```html
        <div>
            <h1>Добавить карточку отеля</h1>
            <form>
                <input placeholder="Контактный номер телефона отеля"/>
                <input placeholder="e-mail отеля"/>
                <input placeholder="Юридические данные отеля"/>
                <input placeholder="Подтверждения пароля"/>
                <input placeholder="Количество звезд у отеля"/>
                <p>Фото отеля и номеров</p>
                <input type="file" multiple/>
                <input placeholder="Страна, город, район"/>
                <input placeholder="Вид отеля по типу"/>
                <input placeholder="Удобства в отеле"/>
                <input type="checkbox"/>
                <label for="myCheckbox">Согласен на обработку персональных данных</label>
                <button>Добавить запись</button>
            </form>
        </div>
```
**Отобразите варианты сообщений, если пользователь указал некорректные данные**
```html
<div>
    <p>Все поля должны быть заполнены</p>
    <p>Неверный gmail</p>
</div>
```
**Страница личного кабинета администратора. orders-management.html**
**Подключаем лого и меняем название**
```html
    <title>Страница личного кабинета администратора</title>
    <link rel="icon" href="images/logo.png"/>
```
**На странице должны отображаться забронированные отели пользователей:**
```html
    <div>
        <h1>Забронированные отели пользователей</h1>
        <div>
            <p>Сортировка</p>
            <button>По дате</button>
            <button>По статусу</button>
        </div>
        <div>
            <p>Статус: На модерации</p>
            <p>Дата заезда</p>
            <p>Дата выезда</p>
            <p>Комментарий к брони</p>
            <p>Стоимость проживания: </p>
            <p>Отель:</p>
            <button>Изменить статус брони на «Подтверждено»</button>
            <button>Изменить статус брони на «Не подтверждено»</button>
        </div>
    </div>
```
**Страница с результатами поиска отелей search.html**
**Подключаем лого и меняем название**
```html
    <title>Страница с результатами поиска отелей</title>
    <link rel="icon" href="images/logo.png">
```
**Продублировать форму поиска с главной страницы**
```html
            <div>
                <input placeholder="Направление/город, страна"/>
                <input placeholder="Даты заезда-отъезда"/>
                <input placeholder="Количество гостей"/>
                <button>Поиск</button>
            </div>
```
**Отобразить в виде карточек информацию обо всех найденных отелях**
```html
            <div>
                <p>Страна, город, район</p>
                <img src="images/hotel1.png"/>
                <p>Дополнительная информация, описание отеля</p>
                <p>Количество звезд</p>
                <p>Адрес (улица, дом, город)</p>
                <p>Удаленность от центра города в км</p>
                <p>Рейтинг по 10-балльной шкале</p>
                <p>Контактный номер телефона отеля</p>
                <p>Номер в этом отеле от (цена за ночь)</p>
                <ul>
                    <li>
                        <img src="images/low_prices.jpg"/>
                    </li>
                    <li>
                        <img src="images/support.png"/>
                    </li>
                </ul>
                <button>Выбрать номер</button>
            </div>
```
**Фильтр поиска**
```html
            <div>
                <p>Фильтр</p>
                <input type="checkbox"/>
                <label for="myCheckbox">Показывать отели списком</label>
                <input type="checkbox"/>
                <label for="myCheckbox">Показывать отели картой</label>
                <input type="checkbox"/>
                <label for="myCheckbox">Избранное</label>
                <input placeholder="Сортировка">
                <div>
                    <p>Цена за ночь (RUB)</p>
                    <input type="number" placeholder="От">
                    <input type="number" placeholder="До">
                </div>
                <input placeholder="Тип размещения">
                <input placeholder="Расположение (от центра города)">
                <input placeholder="Услуги и удобства (в отеле/в номере)">
                <input placeholder="Особенности размещения">
                <input placeholder="Питание">
                <input type="number" placeholder="Количество звезд">
                <input type="number" placeholder="Оценка по отзывам">
                <button>Сортировать</button>
            </div>
```
**Страница с карточкой найденного отеля result.html**
**Подключаем лого и меняем название**
```html
    <title>Страница с карточкой найденного отеля</title>
    <link rel="icon" href="images/logo.png">
```
```html
        <h1>Карточки найденного отеля</h1>
        <div>
            <ul>
                <li>
                    <img src="images/hotel1.png">
                </li>
                <li>
                    <img src="images/hotel2.png">
                </li>
                <li>
                    <img src="images/hotel3.jpeg">
                </li>
            </ul>
            <p>Вид отеля: </p>
            <p>Название: </p>
            <p>Контактный номер телефона отеля: </p>
            <p>E-mail отеля: </p>
            <p>Дополнительная информация об отеле: </p>
            <p>Минимальная стоимость номера: </p>
            <p>Количество звезд: </p>
            <p>Рейтинг по 10-балльной шкале: </p>
        </div>
```