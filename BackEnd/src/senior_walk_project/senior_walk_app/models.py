from django.db import models

# Create your models here.
class Student(models.Model):
  Fname = models.CharField(max_length=50)
  Lname = models.CharField(max_length=50)
  year  = models.IntegerField(default=0)
  lat = models.DecimalField( max_digits=8, decimal_places=5, blank = True,  null = True)
  long = models.DecimalField( max_digits=8, decimal_places=5, blank = True,  null = True)
  # number = models.IntegerField(default=0)
  # active = models.BooleanField(default=True)
  def __str__(self):
      fullName= self.Lname + ' ' + self.Fname
      return fullName
