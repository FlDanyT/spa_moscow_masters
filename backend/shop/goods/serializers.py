from rest_framework import serializers
from .models import GoodsList

class GoodsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodsList
        fields = ['id', 'name', 'description', 'price']