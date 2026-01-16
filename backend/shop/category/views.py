from django.shortcuts import render

from rest_framework import viewsets
from .models import Categories 
from .serializers import CategoriesSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset= Categories.objects.all()
    serializer_class = CategoriesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]