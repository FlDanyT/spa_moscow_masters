Установка
```bash
pip install djangorestframework
```
Создание проекта и приложения
```bash
django-admin startproject shop
django-admin startapp category
```
Миграции и создание администратора:
Логин: admin@shop.com
Пароль: shop2015
```bash
python manage.py migrate
python manage.py createsuperuser
```
Добавляем наше приложение в настройки
```python
INSTALLED_APPS = [
    'category.apps.CategoryConfig',
    'rest_framework',
]
```
**Создание приложения Категории**
Написание модулей
```python
class Categories(models.Model):
    # Поле 'id' создается автоматически
    name = models.CharField(max_length=30)
    description  = models.TextField()
```
Регистрация в category.admin.py
```python
from .models import Categories
admin.site.register(Categories)
```
Миграции
```python
python manage.py makemigrations
python manage.py migrate
```
**Создавать категории, редактировать категории, удалять категории, просматривать категории**
Создаем файл serializers.py в приложении, для преобразования сложных объектов (например, моделей из базы данных) в стандартизированные форматы (JSON, XML). В нем:
```python
from rest_framework import serializers
from .models import Categories

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'name', 'description']
```
Делаем ViewSet в views.py
```python
from rest_framework import viewsets
from .models import Categories 
from .serializers import CategoriesSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset= Categories.objects.all()
    serializer_class = CategoriesSerializer
```
Делаем файл urls.py в нашем приложении
```python
from django.urls import path
from .views import CategoriesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'categories', CategoriesViewSet, basename='categories')

urlpatterns = router.urls
```
Подключаем в главном urls.py
```python
from django.urls import path, include

urlpatterns = [
    path('', include('category.urls'))
]
```
**Не отображается один из url**
В главном urls нужно сделать так:
```python
    path('categories/', include('category.urls')),
    path('goods/', include('goods.urls')),
```
В categories.urls:
```python
router.register(r'', CategoriesViewSet, basename='categories')
```
В goods.urls:
```python
router.register(r'', GoodsListViewSet, basename='goods')
```