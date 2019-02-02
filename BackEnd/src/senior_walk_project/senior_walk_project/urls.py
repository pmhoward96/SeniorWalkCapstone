from django.conf.urls import url, include
from django.contrib import admin
# from django.urls import path

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api/', include('senior_walk_app.urls'))
]
