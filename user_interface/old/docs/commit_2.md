**Делаем минимальный css**
**Подключаем везде css добавляя:**
```html
<link rel="stylesheet" href="css/style.css">
```
**Подключаем шрифт сразу на все страницы:**
```css
@font-face {
    font-family: 'My_font';
    src: url('../fonts/Broadsheet_0.ttf');
}

* {
    font-family: 'My_font';
}
```
**Делаем что бы все отображалось на 768px нормально. ( кроме картинок все двигается само )**
```css
img {
    max-width: 100%;
}
```
Делаем шапку в ряд
```css
.header_li {
    display: inline-block;
    cursor: pointer;
    padding: 5px;
}
```
**Выделяем карточки блоками и ставим через br отступы что бы разделить все**
