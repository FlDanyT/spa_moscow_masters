from django.db import models

# Create your models here.
class Categories(models.Model):
    # Поле 'id' создается автоматически
    name = models.CharField(max_length=30)
    description  = models.TextField()