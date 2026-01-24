В ходе разработки необходимо использовать систему контроля версий GIT. Должно быть не менее 3 коммитов с осмысленными комментариями!

Мои commit:
1) Просто html со всеми картинками и переходами между страниц + минимальный CSS
2) Адаптация под 768px + настройка валидации 
3) Дизайн + макеты + доработки со стороны дизайна

**Подключаем лого и стили**
```html
<link rel="icon" href="images/logo.png">
<link rel="stylesheet" href="css/style.css">
```
**Подключаем шрифты**
```css
@font-face {
    font-family: my_font;
    src: url('../fonts/Broadsheet_0.ttf');
}

* {
    font-family: 'my_font';
}
```
**Делаем что бы все отображалось на 768px нормально. ( кроме картинок все двигается само )**
```css
img {
    max-width: 100%;
}
```
**Делаем шапку**
```html
<header>
    <ul>
        <li class="header_li">Главная</li>
            <a href="page.html">
                <li class="header_li">Карточки</li>
            </a>
    </ul>
</header>
```
```css
.header_li {
    display: inline;
    padding: 5px;
    cursor: pointer;
}
```
**Все по inputs**
```html
<div>
    <p>inputs</p>
    <input type="number">
    <input placeholder="Текст в input">
    <input type="date">

    <input type="checkbox">
    <label for="myCheckBox">Чек-бокс</label>
</div>
```
**Кнопка с ссылкой**
```html
<div>
    <a href="page.html">
        <button>Переход на страницу</button>
    </a>
</div>
```
**Карточки и структурные изменения контента**
```html
<div class="cards-wrapper">
    <div class="cards">
        <p>Название</p>
        <img src="images/hotel1.png">
        <p>Цена</p>
    </div>

    <div class="cards">
        <p>Название</p>
        <img src="images/hotel1.png">
        <p>Цена</p>
    </div>
</div>
```
```css
.cards-wrapper {
    display: flex;
    gap: 20px;
}

.cards {
    max-width: 250px;
    background-color: aqua;
}

@media (max-width: 768px) {
    .cards-wrapper {
        flex-direction: column;
    }
}
```
**Структурные изменения контента еще пример**
```html
<div class="info-wrapper">
    <input>
    <input>
    <button>Клик</button>
</div>
```
```css
@media (max-width: 768px) {
    .info-wrapper {
        flex-direction: column;
    }
}
```
**Форма отправки телефона и gmail с валидацией.**
```html
<div>

    <form>
        <input type="email" required placeholder="E-mail">
        <button type="submit">Отправить</button>
    </form>

    <form>
        <input 
            type="tel"
            required
            pattern="\8[0-9]{10}"
            placeholder="Телефон"
        >
        <button type="submit">Отправить</button>
    </form>

</div>
```
**Блок по центру страницы**
```html
<div class="block">
    <p>Text</p>
    <img src="images/hotel1.png">
</div>
```
```css
.block {
    width: 50%; 
    margin-left: auto;
    margin-right: auto;
}
```
**Макеты**
**Заходим в консоль разработчика и выделяем всю страницу после нажимаем по коду левой кнопкой мыши и выбираем "Capture node screenshot"**