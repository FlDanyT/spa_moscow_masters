from rest_framework import serializers
from .models import ClassifiedInformation

class ClassifiedInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassifiedInformation
        fields = ['id', 'text']