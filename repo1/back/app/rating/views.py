from django.shortcuts import render
from rest_framework import viewsets
from .models import Rating
from .serializers import RatingSerializer


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = []

    def perform_create(self, serializer):
        
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        return super().perform_update(serializer)
