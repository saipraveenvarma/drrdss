# myapp/urls.py
from django.urls import path
from .views import get_dummy_data

urlpatterns = [
    path('dummy/', get_dummy_data, name='get_dummy_data'),
]