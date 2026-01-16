from .models import GoodsList
from .serializers import GoodsListSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

class GoodsListViewSet(viewsets.ModelViewSet):
    queryset = GoodsList.objects.all()
    serializer_class = GoodsListSerializer
    permission_classes = [AllowAny]