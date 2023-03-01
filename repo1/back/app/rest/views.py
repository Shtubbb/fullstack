import datetime
from django.shortcuts import render
from rest_framework import viewsets
from .models import Restaurant
from .serializers import RestaurantSerializer


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        serializer.validated_data['date_creation'] = datetime.datetime.today()
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        return super().perform_update(serializer)
