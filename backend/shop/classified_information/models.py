from django.db import models

# Create your models here.
class ClassifiedInformation(models.Model):
    text = models.TextField()