from django.urls import path
from .views import product_list

app_name = 'apps.products'

urlpatterns = [
    path('list/', product_list, name='product_list'),
]