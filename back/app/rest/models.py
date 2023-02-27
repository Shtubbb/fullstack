from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=20)
    adress = models.CharField(max_length=20)
    numRated = models.IntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=2)

