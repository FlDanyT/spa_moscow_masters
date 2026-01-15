from .models import GoodsList
from .serializers import GoodsListSerializer
from rest_framework import viewsets

class GoodsListViewSet(viewsets.ModelViewSet):
    queryset = GoodsList.objects.all()
    serializer_class = GoodsListSerializer