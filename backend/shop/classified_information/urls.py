from rest_framework.routers import DefaultRouter
from .views import ClassifiedInformationViewSet

router = DefaultRouter()
router.register(r'', ClassifiedInformationViewSet, 'classified_information')

urlpatterns = router.urls