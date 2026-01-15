from django.db import models

class GoodsList(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    price = models.CharField(max_length=7)