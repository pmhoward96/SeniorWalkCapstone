from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(
r'students',
 views.StudentViewSet,
 base_name='students'
 )

urlpatterns = [
    #router create the url for us automatically generate
    url('', include(router.urls))
]
