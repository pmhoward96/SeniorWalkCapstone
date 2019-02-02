from django.shortcuts import render
from . import models
from . import serializers

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class StudentViewSet(viewsets.ModelViewSet):
    """provide a list of all Students back"""
    queryset= models.Student.objects.all()
    serializer_class = serializers.StudentSerializer
    """RestFul API methods for the student data set"""
    # def get_queryset(self):
    #     """Overrides the GET methods"""
    #     pass
    # def create(self, request, *arg, **kwargs)
    # """Override default POST"""
    #     pass
    # For debuging ---  import pdb; pdb.set_trace()
    # def update(self, request, *arg, **kwargs)
    # """Override default PUT"""
    #     pass
    # def partial_update(self, request, *arg, **kwargs)
    # """Override default PATCH"""
    #     pass
    # def destroy(self, request, *arg, **kwargs)
    # """Override default DELETE"""
    #     pass


    # Getting information from param in django method
    # localhost:8001/student?id=23
    # (self.request.query_params.get(param_name,default))
