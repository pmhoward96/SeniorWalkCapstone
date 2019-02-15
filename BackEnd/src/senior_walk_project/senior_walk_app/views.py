from django.shortcuts import render
from . import models
from . import serializers

from rest_framework.decorators import action
from rest_framework import viewsets
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
    #  getting the data from user form
    # data = reques.data
    # student = models.Student.objects.create(Fname=data['Fname'], Lname=data['LName'], year=data['year'])
    # student.save()
    # serializer = serializers.StudentSerializer(student)
    # return  Response(serializer.data)
    # data['name']
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
    # @action(detail=True) #True for single object and false for multiple object
    # http://localhost:8001/api/students/getLocation/?Fname=James&Lname=Link&year=24
    @action(detail=False)
    def getLocation(self, request, **kwargs):
        """Marking extra actions for routing"""
        # import pdb; pdb.set_trace()
        # students = models.Student.objects.all()
        fname = self.request.query_params.get('Fname', None)
        lname = self.request.query_params.get('Lname', None)
        year = self.request.query_params.get('year', 0)
        students = models.Student.objects.filter(Fname=fname,Lname=lname, year=year)
        serializer = serializers.StudentSerializer(students, many=True)
        return Response(serializer.data)



        # return Response({'main':'resone'})

    # Getting information from param in django method
    # localhost:8001/student?id=23
    # (self.request.query_params.get(param_name,default))
    #   get the single instance
    #     self.get_object()
    #     converted to native Python
    #     serializers.StudentSerializer(instance)

# gets an object of the parameter pass in the url
#  self.request.query_params
