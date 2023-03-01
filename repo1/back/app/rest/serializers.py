from rest_framework import serializers
from .models import Restaurant
from user.serializers import UserSerializer
from rating.serializers import RatingSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    rating_set = RatingSerializer(read_only=True, many=True)
    rating_count = serializers.SerializerMethodField()

    def get_rating_count(self, obj):
        return obj.rating_set.count()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'adress', 'user',
                  'rating_set', 'date_creation', 'rating_count']
