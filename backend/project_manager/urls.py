from django.urls import path
from . import views

urlpatterns = [
    path('create_user/',views.create_user),
    path('create_project/',views.create_project),
    path('send_projects/',views.get_project),
    path('create_task/',views.create_task),
    path('log_in/',views.log_in)
]