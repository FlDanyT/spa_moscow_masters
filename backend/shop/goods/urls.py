from rest_framework.routers import DefaultRouter
from .views import GoodsListViewSet

router = DefaultRouter()
router.register(r'', GoodsListViewSet, basename='goods')

urlpatterns = router.urls