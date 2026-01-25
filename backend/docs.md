Создание и активирование виртуального окружения на Windows.
```bash
python -m venv venv
.\venv\scripts\activate
```
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
```bash
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
**Авторизация по токену**
Установка
```bash
pip install  djangorestframework-simplejwt
```
Делаем приложение users.
Делаем импорты и настройки.
```python
INSTALLED_APPS = [
    'rest_framework.authtoken',
    'users'
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ]
}
```
Views:
```python
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class RegisterView(APIView):
    permission_classes = []

    def post(self, request):
        username = request.data.get("username")
        password= request.data.get("password")

        if not username or not password:
            return Response({"message":  "Invalid fields"}, status=422)
        
        User.objects.create_user(username=username, password=password)
        return Response({"message": "User created"}, status=201)
```
urls: 
```python
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', obtain_auth_token)
]
```
И в гланый urls:
```python
urlpatterns = [
    path('api/', include('users.urls'))
]
```
Миграции
```bash
python manage.py makemigrations
python manage.py migrate
```
**Вместо Token делаем Bearer**
В users делаем authentication.py
```python
from rest_framework.authentication import TokenAuthentication

class BearerTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'
```
В настройках
```python
'DEFAULT_AUTHENTICATION_CLASSES': [
    'users.authentication.BearerTokenAuthentication'
],
```
Сделаем так что бы смотреть и редактировать товары могли все, категории без регистрации могли только смотреть, classified_information оставим доступ только с полной авторизацией на просмотр и редактирование
goods.views:
```python
from rest_framework.permissions import AllowAny

permission_classes = [AllowAny]
```
category.views:
```python
from rest_framework.permissions import IsAuthenticatedOrReadOnly

permission_classes = [IsAuthenticatedOrReadOnly]
```
**Делаем приложение products работа товаров с картинками**
**Настраиваем MEDIA в settings.py**
```python
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```
**Для открытия картинок в главный urls.py добавляем**
```python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```
**Модель картинки в models:**
```python
image = models.ImageField(upload_to='products/')
```
**Делаем обычное подключение к админке, serializer, views, urls. Вот и все мы можем загружать products с картинками через api!**
**В приложение products для каждого продукта получаем ссылку на оплату по url /products/{product_id}/buy/**
**Для этого во view в ProductViewSet надо добавить этот код и все**
```python
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

@action(detail=True, methods=['get'])
def buy(self, request, pk=None):
    product = self.get_object()

    payment_url = "https://pay.example.com/order/123456"

    return Response({
        "product": product.name,
        "payment_url": payment_url
    }, status=status.HTTP_200_OK)
```