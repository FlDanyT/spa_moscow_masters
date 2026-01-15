from django.urls import path
from .views import CategoriesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', CategoriesViewSet, basename='categories')

urlpatterns = router.urls