from rest_framework import serializers
from . import models


# Serializers define the API representation.
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        """Show the following feeds"""
        model = models.Student
        fields = ('id','Fname', 'Lname', 'year', 'lat', 'long') 
