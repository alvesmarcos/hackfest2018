from django.urls import re_path
from rest_framework import routers
from .views import index
from .views import PLOViewSet


router = routers.SimpleRouter(trailing_slash='optional')
router.register(r'plo', PLOViewSet, base_name='plo')

urlpatterns = [
    re_path(r'^$', index),
]

urlpatterns += router.urls