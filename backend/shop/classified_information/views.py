from django.shortcuts import render
from .serializers import ClassifiedInformationSerializer
from .models import ClassifiedInformation
from rest_framework import viewsets

class ClassifiedInformationViewSet(viewsets.ModelViewSet):
    queryset = ClassifiedInformation.objects.all()
    serializer_class = ClassifiedInformationSerializer