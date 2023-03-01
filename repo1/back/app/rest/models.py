from django.utils.timezone import now
from django.db import models
from django.contrib.auth.models import User


class Restaurant(models.Model):
    name = models.CharField(max_length=20)
    adress = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    date_creation = models.DateTimeField(default=now, null=True)
