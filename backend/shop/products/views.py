from rest_framework import viewsets, status
from .models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    @action(detail=True, methods=['get'])
    def buy(self, request, pk=None):
        product = self.get_object()

        payment_url = "https://pay.example.com/order/123456"

        return Response({
            "product": product.name,
            "payment_url": payment_url
        }, status=status.HTTP_200_OK)
