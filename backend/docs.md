Установка
```python
pip install djangorestframework
```
Создание проекта и приложения
```python
django-admin startproject shop
django-admin startapp category
```
Миграции и создание администратора:
Логин: admin@shop.com
Пароль: shop2015
```python
python manage.py migrate
python manage.py createsuperuser
```