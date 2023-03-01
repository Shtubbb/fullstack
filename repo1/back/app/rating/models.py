from django.utils.timezone import now
from django.db import models
from django.contrib.auth.models import User
from rest.models import Restaurant
from django.core.validators import MinValueValidator, MaxValueValidator


class Rating(models.Model):
    rating = models.PositiveIntegerField(
        default=5, validators=[MinValueValidator(1), MaxValueValidator(5)])
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_creation = models.DateTimeField(default=now, null=True)
